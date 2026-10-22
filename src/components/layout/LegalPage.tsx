import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import styles from "./LegalPage.module.css";

export type LegalSection = { title: string; body: readonly string[] };

type Props = {
  title: string;
  intro: string;
  sections: readonly LegalSection[];
};

/** Gabarit commun des pages légales. Les crochets [À renseigner : …] signalent les informations manquantes. */
export function LegalPage({ title, intro, sections }: Props) {
  return (
    <main id="contenu">
      <Container>
        <article className={styles.page}>
          <Eyebrow dot>Informations légales</Eyebrow>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.intro}>{intro}</p>
          {sections.map((section) => (
            <section key={section.title} className={styles.section}>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>
      </Container>
    </main>
  );
}
