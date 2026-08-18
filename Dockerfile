# syntax=docker/dockerfile:1
# ---------------------------------------------------------------------------
# Dockerfile — application Next.js
#
# Construit UNIQUEMENT dans GitHub Actions, jamais sur le VPS
# (~/infra/CLAUDE.md § 3.5). Le serveur ne fait que tirer l'image.
#
# PRÉREQUIS dans next.config.js / next.config.mjs :
#
#     const nextConfig = { output: 'standalone' }
#
# Sans cette ligne, le dossier .next/standalone n'existe pas et l'étape
# "runner" échoue. C'est l'oubli n°1 sur ce type d'image.
# ---------------------------------------------------------------------------

# Un seul endroit à modifier pour monter de version.
ARG NODE_VERSION=24.19
ARG ALPINE_VERSION=3.24

# ===========================================================================
# base — socle commun aux étapes de dépendances et de build
# ===========================================================================
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS base

# libc6-compat : certains binaires natifs (sharp, esbuild...) sont compilés
# contre glibc et ont besoin de cette couche de compatibilité sur Alpine.
#
# corepack installe les shims pnpm et yarn, sans réseau. Activé ici une seule
# fois plutôt que dans "deps" ET dans "builder" : ce dernier repart de "base",
# pas de "deps", donc les shims étaient réinstallés à chaque build — et le RUN
# de "builder" est invalidé par le moindre changement de source.
RUN apk add --no-cache libc6-compat \
 && (corepack enable || echo "corepack indisponible, repli sur npm")

WORKDIR /app

# ===========================================================================
# deps — installation des dépendances, isolée pour être mise en cache
#
# Seuls les manifestes sont copiés ici : tant que package.json et le lockfile
# ne changent pas, Docker réutilise cette couche et saute l'installation.
# C'est ce qui fait la différence entre un build de 20 s et un build de 3 min.
# ===========================================================================
FROM base AS deps

COPY package.json ./
COPY package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Installation reproductible : on refuse de modifier le lockfile.
# Un lockfile désynchronisé doit faire échouer le build, pas être « réparé »
# silencieusement avec des versions différentes de celles testées en local.
RUN set -eux; \
    if [ -f pnpm-lock.yaml ]; then \
        command -v pnpm >/dev/null || npm install -g pnpm; \
        pnpm install --frozen-lockfile; \
    elif [ -f yarn.lock ]; then \
        command -v yarn >/dev/null || npm install -g yarn; \
        yarn install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then \
        npm ci; \
    else \
        echo "ERREUR : aucun lockfile (package-lock.json, pnpm-lock.yaml ou yarn.lock)." >&2; \
        echo "Un build sans lockfile n'est pas reproductible." >&2; \
        exit 1; \
    fi

# ===========================================================================
# builder — compilation de l'application
# ===========================================================================
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Garantit l'existence de public/ : le COPY de l'étape runner échouerait si
# le projet n'a pas de dossier public, ce qui arrive sur une API pure.
RUN mkdir -p public

# ---------------------------------------------------------------------------
# VARIABLES NEXT_PUBLIC_*
# Elles sont inlinées dans le bundle JavaScript AU MOMENT DU BUILD, pas au
# démarrage. Les mettre dans le .env du serveur n'a donc aucun effet : il faut
# les passer ici, en build-arg depuis le workflow GitHub Actions.
#
# Corollaire de sécurité : tout NEXT_PUBLIC_* finit lisible dans le navigateur.
# Jamais de secret sous ce préfixe.
# ---------------------------------------------------------------------------
# ARG NEXT_PUBLIC_SITE_URL
# ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}

# npm run build exécute le script "build" du package.json quel que soit le
# gestionnaire qui a rempli node_modules — les binaires sont dans
# node_modules/.bin. Une seconde cascade pnpm/yarn/npm ici ne servait qu'à
# diverger de celle de l'étape "deps" (elle avait déjà 3 branches contre 4).
#
# À revoir si tu passes à un monorepo pnpm nécessitant "pnpm -r build".
RUN set -eux; \
    npm run build; \
    test -d .next/standalone || { \
        echo "ERREUR : .next/standalone absent." >&2; \
        echo "Ajouter  output: 'standalone'  dans next.config." >&2; \
        exit 1; \
    }

# ===========================================================================
# runner — image finale
#
# Repart de l'image node nue, PAS de "base" : ni les sources, ni node_modules
# complet, ni la toolchain de build ne se retrouvent dans l'image livrée.
# La sortie standalone embarque uniquement les dépendances réellement
# atteignables depuis le code (tracées par Next.js).
# ===========================================================================
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
# 0.0.0.0 et non localhost : sans cela le serveur n'écoute que sur la loopback
# du conteneur et Caddy reçoit un "connection refused".
ENV HOSTNAME=0.0.0.0

# Retire npm, npx et yarn : la sortie standalone se lance avec
# "node server.js" et n'a besoin d'aucun gestionnaire de paquets.
#
# ATTENTION, ne pas se méprendre sur l'effet : cela ne réduit PAS la taille de
# l'image. Les couches Docker sont additives, une suppression ajoute une
# couche de masquage (mesuré : 326 Mo avant comme après). Le bénéfice est
# uniquement sécuritaire — npm n'est plus disponible pour installer quoi que
# ce soit à qui obtiendrait une exécution de code dans le conteneur.
#
# Le poids de l'image est structurel : ~121 Mo pour le binaire Node,
# ~72 Mo pour la sortie standalone (dont ~33 Mo de binaires sharp/libvips
# pour l'optimisation d'images de Next.js).
RUN rm -rf /usr/local/lib/node_modules/npm \
           /usr/local/bin/npm \
           /usr/local/bin/npx \
           /opt/yarn-*

# Utilisateur non privilégié. UID/GID 1001 fixés explicitement pour
# correspondre au "user: 1001:1001" du docker-compose.yml.
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 --ingroup nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public       ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Point de montage du cache ISR : le compose y monte un tmpfs en uid 1001
# (le système de fichiers du conteneur est en lecture seule), donc seul le
# répertoire vide compte ici.
#
# chown SANS -R : les COPY ci-dessus ont déjà posé nextjs:nodejs sur tout ce
# qu'ils écrivent, seul le répertoire créé par ce RUN a besoin d'être repris.
#
# (Un -R avait été soupçonné de déclencher un copy-up overlayfs de tout .next
# dans une couche supplémentaire. Mesuré sur une app Next.js 15 réelle : la
# couche pèse 16,4 kB dans les deux cas, l'image totale ne varie pas. Le -R
# est donc inutile, pas coûteux — on l'enlève pour l'intention, pas pour la
# taille.)
RUN mkdir -p .next/cache && chown nextjs:nodejs .next .next/cache

USER nextjs

# Documentaire uniquement : aucun port n'est publié (CLAUDE.md § 3.1).
# Caddy joint le conteneur par le réseau Docker interne.
EXPOSE 3000

# server.js est généré par la sortie standalone de Next.js.
# Pas de "npm start" : on évite un processus npm intermédiaire qui
# n'assure pas la propagation correcte de SIGTERM.
CMD ["node", "server.js"]
