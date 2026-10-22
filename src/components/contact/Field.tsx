import type { ReactNode } from "react";
import styles from "./Field.module.css";

type Props = {
  id: string;
  label: string;
  /** Mention « facultatif ». */
  optional?: boolean;
  error?: string;
  children: ReactNode;
};

/** Libellé + contrôle + message d'erreur annoncé aux lecteurs d'écran. */
export function Field({ id, label, optional = false, error, children }: Props) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {optional && <small> (facultatif)</small>}
      </label>
      {children}
      <p id={`${id}-error`} className={styles.error} aria-live="polite">
        {error}
      </p>
    </div>
  );
}
