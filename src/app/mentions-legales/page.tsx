import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { MENTIONS_INTRO, MENTIONS_SECTIONS } from "@/data/legal";

// noindex tant que les informations réelles de l'éditeur ne sont pas renseignées.
export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return <LegalPage title="Mentions légales" intro={MENTIONS_INTRO} sections={MENTIONS_SECTIONS} />;
}
