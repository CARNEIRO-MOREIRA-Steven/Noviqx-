import { BAND_ITEMS } from "@/data/services";
import { Container } from "@/components/ui/Container";
import styles from "./Band.module.css";

/** Bandeau de positionnement : quatre expertises, sans statistique. */
export function Band() {
  return (
    <Container>
      <ul className={styles.band} aria-label="Expertises">
        {BAND_ITEMS.map((item) => (
          <li key={item.title} className={styles.item}>
            <strong>{item.title}</strong>
            <span>{item.caption}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}
