import { cx } from "@/lib/cx";
import styles from "./TagList.module.css";

type Props = {
  tags: readonly string[];
  onLight?: boolean;
  className?: string;
};

export function TagList({ tags, onLight = false, className }: Props) {
  return (
    <ul className={cx(styles.tags, onLight && styles.onLight, className)}>
      {tags.map((tag) => (
        <li key={tag} className={styles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
