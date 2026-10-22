import { LOCAL_TOWNS } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import styles from "./Local.module.css";

/** Section de proximité : texte naturel, sans répétition artificielle de villes. */
export function Local() {
  return (
    <Container>
      <Section id="local" labelledBy="local-title">
        <div className={styles.grid}>
          <div>
            <Eyebrow dot>Proximité</Eyebrow>
            <h2 id="local-title" className={styles.title}>
              Votre présence en ligne, pensée pour votre marché local.
            </h2>
          </div>
          <div>
            <p className={styles.lede}>
              Vous êtes artisan, commerçant ou dirigeant d’entreprise dans le secteur de Chauny, Tergnier ou plus
              largement dans l’Aisne ? NOVIQX vous accompagne dans la création, l’évolution et la maintenance de votre
              site internet, avec une approche personnalisée et des solutions adaptées à votre activité.
            </p>
            <p className={styles.lede}>
              Je travaille depuis le secteur de Beautor et Chauny. Les échanges peuvent se faire à distance, et les
              projets sont réalisables partout en France.
            </p>
            <ul className={styles.towns} aria-label="Secteurs">
              {LOCAL_TOWNS.map((town) => (
                <li key={town}>{town}</li>
              ))}
            </ul>
            <p className={styles.rule}>
              Activité exercée à titre indépendant, sans accueil du public. Les rendez-vous se font sur demande.
            </p>
          </div>
        </div>
      </Section>
    </Container>
  );
}
