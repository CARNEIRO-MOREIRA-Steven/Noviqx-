import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import styles from "./SectionHead.module.css";
import { cx } from "@/lib/cx";

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  /** Titre seul, sur une colonne. */
  single?: boolean;
};

/** En-tête de section : sur-titre, titre (h2) et introduction optionnelle. */
export function SectionHead({ id, eyebrow, title, lede, single = false }: Props) {
  return (
    <header className={cx(styles.head, single && styles.single)}>
      <Eyebrow dot className={styles.eyebrow}>
        {eyebrow}
      </Eyebrow>
      <h2 id={id}>{title}</h2>
      {lede && <p className={styles.lede}>{lede}</p>}
    </header>
  );
}
