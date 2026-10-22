import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = { title: "Page introuvable", robots: { index: false } };

export default function NotFound() {
  return (
    <main id="contenu">
      <Container>
        <div style={{ display: "grid", gap: 24, padding: "clamp(80px, 14vw, 160px) 0", justifyItems: "start" }}>
          <Eyebrow dot>Erreur 404</Eyebrow>
          <h1 style={{ fontSize: "clamp(2.6rem, 8vw, 5rem)" }}>Cette page n’existe pas.</h1>
          <p style={{ maxWidth: "48ch", color: "var(--mute)" }}>
            Le lien est peut-être incorrect, ou la page a été déplacée. Revenez à l’accueil pour retrouver les services
            et les tarifs.
          </p>
          <Button href="/" arrow>
            Retour à l’accueil
          </Button>
        </div>
      </Container>
    </main>
  );
}
