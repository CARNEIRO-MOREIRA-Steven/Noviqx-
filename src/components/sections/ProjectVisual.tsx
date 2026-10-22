import type { Project } from "@/data/portfolio";
import styles from "./ProjectVisual.module.css";

/**
 * Visuels de démonstration en CSS. Ils disparaissent dès qu'un projet reçoit une vraie
 * capture (`image` dans data/portfolio.ts).
 */
export function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  if (kind === "craft") {
    return (
      <div className={styles.craft} aria-hidden="true">
        <h4>
          Du bois, <u>du soin.</u>
        </h4>
        <div className={styles.craftImg} />
        <div className={styles.craftRow}>
          <span>Demander un devis</span>
          <em>Réalisations</em>
        </div>
      </div>
    );
  }

  if (kind === "shop") {
    return (
      <div className={styles.shop} aria-hidden="true">
        <div className={styles.shopTop}>
          <span>Maison Concept</span>
          <span>Panier (2)</span>
        </div>
        <div className={styles.shopGrid}>
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.tool} aria-hidden="true">
      <div className={styles.side}>
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className={styles.main}>
        <span className={styles.key} />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
