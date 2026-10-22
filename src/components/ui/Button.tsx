import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

type Style = {
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  /** `inverse` : bouton sombre, pour les surfaces claires. */
  tone?: "default" | "inverse";
};

/** Classes d'un bouton, réutilisables sur un <button> natif (ex. envoi de formulaire). */
export function buttonClasses({ variant = "primary", size = "md", tone = "default" }: Style = {}): string {
  return cx(
    styles.btn,
    variant === "primary" ? styles.primary : styles.ghost,
    size === "sm" && styles.sm,
    tone === "inverse" && styles.inverse,
  );
}

type Props = Style & {
  href: string;
  children: ReactNode;
  /** Ajoute la flèche animée. */
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Button({ href, children, arrow = false, className, onClick, ...style }: Props) {
  return (
    <Link href={href} className={cx(buttonClasses(style), className)} onClick={onClick}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function Arrow() {
  return (
    <span className={styles.arrow} aria-hidden="true">
      →
    </span>
  );
}
