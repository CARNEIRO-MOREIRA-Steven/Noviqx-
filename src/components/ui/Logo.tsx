
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../app/noviqx.png";
import styles from "./Logo.module.css";

type Props = {
  withTagline?: boolean;
  onClick?: () => void;
};

export function Logo({ withTagline = false, onClick }: Props) {
  return (
    <Link
      href="/"
      className={styles.logo}
      aria-label="NOVIQX, solutions digitales, accueil"
      onClick={onClick}
    >
      <Image
        src={logoImage}
        alt="NOVIQX — Solutions digitales"
        priority
        className={styles.image}
      />
      {/* {withTagline && (
        <span className={styles.tagline}>Solutions digitales</span>
      )} */}
    </Link>
  );
}
