import { SERVICES, type Service } from "@/data/services";
import { contactHref } from "@/lib/links";
import { cx } from "@/lib/cx";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeatureList } from "@/components/ui/FeatureList";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { TagList } from "@/components/ui/TagList";
import styles from "./Services.module.css";

/** Emplacement de chaque carte dans la grille 12 colonnes (ordre de SERVICES). */
const SLOTS = [styles.slotA, styles.slotB, styles.slotC, styles.slotD] as const;

export function Services() {
  return (
    <Container>
      <Section id="services" labelledBy="services-title">
        <SectionHead
          id="services-title"
          eyebrow="Services"
          title="Votre projet mérite mieux qu’un site standard."
          lede="Chaque entreprise a ses objectifs, ses contraintes et sa manière de travailler. Je conçois des solutions web adaptées à votre activité, à vos clients et à votre évolution."
        />
        <div className={styles.grid}>
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} slot={SLOTS[index]} />
          ))}
        </div>
      </Section>
    </Container>
  );
}

function ServiceCard({ service, slot }: { service: Service; slot: string }) {
  const light = service.variant === "light";
  return (
    <article
      className={cx(
        styles.card,
        slot,
        light && styles.light,
        service.variant === "outline" && styles.outline,
      )}
    >
      <Eyebrow className={styles.eyebrow}>{service.eyebrow}</Eyebrow>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.text}>{service.description}</p>

      {service.features && <FeatureList items={service.features} onLight={light} />}

      {service.stack && (
        <p className={styles.stack}>
          {service.stack.map((line) =>
            line.startsWith("//") ? (
              <span key={line} className={styles.muted}>
                {line}
                <br />
              </span>
            ) : (
              <span key={line}>
                {line}
                <br />
              </span>
            ),
          )}
        </p>
      )}

      {service.split && (
        <div className={styles.split}>
          {service.split.map((part) => (
            <div key={part.title}>
              <h4>{part.title}</h4>
              <p>{part.text}</p>
            </div>
          ))}
        </div>
      )}

      {service.tags && <TagList tags={service.tags} onLight={light} />}

      <Button href={contactHref(service.cta.type)} tone={light ? "inverse" : "default"} arrow className={styles.cta}>
        {service.cta.label}
      </Button>
    </article>
  );
}
