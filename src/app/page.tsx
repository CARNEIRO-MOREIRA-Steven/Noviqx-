import { SITE } from "@/config/site";
import { FAQ } from "@/data/faq";
import { JsonLd } from "@/components/ui/JsonLd";
import { Band } from "@/components/sections/Band";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Local } from "@/components/sections/Local";
import { Method } from "@/components/sections/Method";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Services } from "@/components/sections/Services";
import { Why } from "@/components/sections/Why";

/**
 * Données structurées : uniquement des informations vérifiables.
 * Aucune adresse, zone de service, avis, note ou coordonnée non confirmée,
 * et pas de LocalBusiness : l'activité n'a pas d'implantation physique ouverte au public.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      slogan: SITE.tagline,
      url: `${SITE.url}/`,
      description: "Création de sites vitrines, boutiques en ligne, développement web sur mesure et maintenance.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: `${SITE.url}/`,
      name: SITE.name,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE.url}/#organization` },
    },
    ...[
      "Création de sites vitrines",
      "Création de boutiques en ligne",
      "Développement web sur mesure",
      "Maintenance et dépannage de sites web",
    ].map((name) => ({
      "@type": "Service",
      name,
      provider: { "@id": `${SITE.url}/#organization` },
    })),
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <main id="contenu">
      <JsonLd data={structuredData} />
      <Hero />
      <Band />
      <Services />
      <Portfolio />
      <Pricing />
      <Method />
      <Why />
      <Local />
      <Faq />
      <Contact />
    </main>
  );
}
