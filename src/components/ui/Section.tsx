import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Section.module.css";

type Props = {
  id?: string;
  /** Titre accessible de la section quand elle n'a pas de titre visible. */
  labelledBy?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, labelledBy, className, children }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cx(styles.section, className)}>
      {children}
    </section>
  );
}
