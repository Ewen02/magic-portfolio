"use client";

import { Button } from "@/once-ui/components";

export function PrintButton({ label }: { label: string }) {
  return (
    <Button
      onClick={() => window.print()}
      prefixIcon="clipboard"
      label={label}
      variant="primary"
      size="m"
    />
  );
}
