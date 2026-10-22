import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Eyebrow.module.css";

type Props = {
  children: ReactNode;
  /** Affiche la pastille verte devant le texte. */
  dot?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function Eyebrow({ children, dot = false, className, style }: Props) {
  return (
    <p className={cx(styles.eyebrow, className)} style={style}>
      {dot && (
        <span className={styles.dot} aria-hidden="true">
          ●
        </span>
      )}
      {children}
    </p>
  );
}
