import { METHOD_CONTINUITY, METHOD_STEPS } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import styles from "./Method.module.css";

export function Method() {
  return (
    <Container>
      <Section id="methode" labelledBy="methode-title">
        <SectionHead
          id="methode-title"
          eyebrow="Méthode"
          title="Un projet bien conçu commence par une bonne méthode."
          single
        />
        {/* Vraie séquence : la numérotation porte une information. */}
        <ol className={styles.steps}>
          {METHOD_STEPS.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.dot} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className={styles.continuity}>{METHOD_CONTINUITY}</p>
      </Section>
    </Container>
  );
}
