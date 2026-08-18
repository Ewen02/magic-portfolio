// Sonde utilisee par le healthcheck du conteneur.
//
// Sans elle, `docker compose up -d` considere qu'un conteneur qui n'a pas
// encore plante fonctionne : une image cassee passe en "running", l'ancienne
// est detruite, et le proxy sert des 502 pendant que le deploiement affiche
// un succes.
//
// force-dynamic : la reponse ne doit jamais etre pre-rendue au build, sinon
// elle repondrait "ok" meme serveur eteint.
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({ status: "ok" });
}
