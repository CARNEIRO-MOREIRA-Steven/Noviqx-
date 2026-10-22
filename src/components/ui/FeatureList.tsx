import { cx } from "@/lib/cx";
import styles from "./FeatureList.module.css";

type Props = {
  items: readonly string[];
  /** Tiret sombre, pour les surfaces claires. */
  onLight?: boolean;
  className?: string;
};

export function FeatureList({ items, onLight = false, className }: Props) {
  return (
    <ul className={cx(styles.list, onLight && styles.onLight, className)}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
