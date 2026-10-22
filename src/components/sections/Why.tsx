import { WHY_ITEMS } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import styles from "./Why.module.css";

export function Why() {
  return (
    <div className={styles.band}>
      <Container>
        <Section id="pourquoi" labelledBy="pourquoi-title">
          <div className={styles.grid}>
            <div className={styles.aside}>
              <Eyebrow dot>Pourquoi NOVIQX</Eyebrow>
              <h2 id="pourquoi-title" className={styles.title}>
                Un site pensé pour votre entreprise. Pas un modèle posé à la va-vite.
              </h2>
              <p className={styles.quote}>
                Un site ne doit pas seulement être beau. Il doit inspirer confiance et aider votre entreprise à se
                développer.
              </p>
            </div>
            <ul className={styles.list}>
              {WHY_ITEMS.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </Container>
    </div>
  );
}
