import { PROJECTS } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { PortfolioFilter } from "./PortfolioFilter";
import { ProjectCard } from "./ProjectCard";

export function Portfolio() {
  const hasDemo = PROJECTS.some((p) => p.demo);

  return (
    <Container>
      <Section id="realisations" labelledBy="realisations-title">
        <SectionHead
          id="realisations-title"
          eyebrow="Réalisations"
          title="Du concret. Du sur-mesure. Du résultat."
          lede={
            hasDemo
              ? "Trois concepts de démonstration montrent ma façon de composer une page. Cette structure est faite pour accueillir mes projets livrés, avec capture, technologies et lien vers le site en ligne."
              : "Une sélection de projets livrés, avec la technologie utilisée et le besoin auquel chacun répond."
          }
        />
        {/* Seul le filtre est un composant client : les cartes restent rendues côté serveur. */}
        <PortfolioFilter>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </PortfolioFilter>
      </Section>
    </Container>
  );
}
