import styles from "./HeroShowcase.module.css";

/**
 * Composition de maquettes du hero, entièrement en CSS : aucune image à charger,
 * donc aucun impact sur le LCP. Contenus fictifs (concepts de démonstration).
 * Tailles en `cqw` : la composition se redimensionne avec son conteneur.
 */
export function HeroShowcase() {
  return (
    <figure className={styles.wrap}>
      <div
        className={styles.stage}
        role="img"
        aria-label="Composition de quatre maquettes : site vitrine sur ordinateur, boutique en ligne, application de réservation et version mobile."
      >
        <div className={`${styles.m} ${styles.desk}`} aria-hidden="true">
          <div className={styles.bar}>
            <i />
            <i />
            <i />
            <span>exemple-vitrine.fr</span>
          </div>
          <div className={styles.deskBody}>
            <div>
              <h4 className={styles.deskTitle}>
                Menuiserie
                <br />
                &amp; agencement
              </h4>
              <span className={styles.line} style={{ width: "92%" }} />
              <span className={styles.line} style={{ width: "76%" }} />
              <span className={styles.line} style={{ width: "84%" }} />
              <span className={styles.pill}>Demander un devis</span>
            </div>
            <div className={`${styles.ph} ${styles.deskPhoto}`} />
          </div>
        </div>

        <div className={`${styles.m} ${styles.shop}`} aria-hidden="true">
          <div className={styles.bar}>
            <i />
            <i />
            <i />
            <span>boutique-exemple.fr</span>
          </div>
          <div className={styles.shopGrid}>
            {[
              ["Sac cabas", "89 €"],
              ["Carnet noir", "24 €"],
              ["Gourde", "32 €"],
              ["Étui cuir", "45 €"],
            ].map(([name, price]) => (
              <div key={name} className={styles.prod}>
                <div className={styles.ph} />
                <b>{name}</b>
                <span>{price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.m} ${styles.phone}`} aria-hidden="true">
          <div className={styles.notch} />
          <h4 className={styles.phoneTitle}>
            Menuiserie
            <br />
            &amp; agencement
          </h4>
          <span className={styles.line} style={{ width: "90%" }} />
          <span className={styles.line} style={{ width: "70%" }} />
          <div className={`${styles.ph} ${styles.phonePhoto}`} />
          <span className={styles.pill} style={{ marginTop: 0 }}>
            Devis
          </span>
        </div>

        <div className={`${styles.m} ${styles.cal}`} aria-hidden="true">
          <div className={styles.calHead}>
            Réservation <em>octobre</em>
          </div>
          <div className={styles.calGrid}>
            {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
              <span key={`d${i}`}>{d}</span>
            ))}
            {CAL_DAYS.map(([day, state]) => (
              <span key={day} className={state === "on" ? styles.on : state === "pick" ? styles.pick : undefined}>
                {day}
              </span>
            ))}
          </div>
        </div>
      </div>
      <figcaption className={styles.note}>Concepts de démonstration. Contenus fictifs, non issus de références clients.</figcaption>
    </figure>
  );
}

const CAL_DAYS: ReadonlyArray<readonly [number, "on" | "pick" | ""]> = [
  [5, "on"], [6, ""], [7, "on"], [8, "pick"], [9, ""], [10, "on"], [11, ""],
  [12, ""], [13, "on"], [14, ""], [15, ""], [16, "on"], [17, ""], [18, ""],
];
