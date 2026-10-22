import type { ElementType, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Container.module.css";

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** Largeur maximale et gouttières, y compris les zones sûres des téléphones. */
export function Container({ as: Tag = "div", className, children }: Props) {
  return <Tag className={cx(styles.container, className)}>{children}</Tag>;
}
