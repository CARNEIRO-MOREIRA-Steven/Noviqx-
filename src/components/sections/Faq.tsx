import { FAQ } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import styles from "./Faq.module.css";

/**
 * Accordéon basé sur <details>/<summary> : accessible au clavier et aux lecteurs d'écran
 * nativement, sans JavaScript. Le contenu reste dans le HTML pour les moteurs de recherche.
 */
export function Faq() {
  return (
    <Container>
      <Section id="faq" labelledBy="faq-title">
        <SectionHead id="faq-title" eyebrow="Questions fréquentes" title="Ce que l’on me demande avant de démarrer." single />
        <div className={styles.faq}>
          {FAQ.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary className={styles.summary}>
                {item.question}
                <span className={styles.icon} aria-hidden="true" />
              </summary>
              <div className={styles.answer}>{item.answer}</div>
            </details>
          ))}
        </div>
      </Section>
    </Container>
  );
}
