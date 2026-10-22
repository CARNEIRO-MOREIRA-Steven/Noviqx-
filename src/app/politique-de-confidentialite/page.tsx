import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { PRIVACY_INTRO, PRIVACY_SECTIONS } from "@/data/legal";

// noindex tant que les informations réelles ne sont pas renseignées.
export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: false, follow: true },
};

export default function PolitiqueDeConfidentialitePage() {
  return <LegalPage title="Politique de confidentialité" intro={PRIVACY_INTRO} sections={PRIVACY_SECTIONS} />;
}
