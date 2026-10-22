import Link from "next/link";
import { SITE } from "@/config/site";
import { FOOTER_COLUMNS, LEGAL_LINKS } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Logo } from "@/components/ui/Logo";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div>
            <Logo />
            <Eyebrow className={styles.signature}>{SITE.tagline}</Eyebrow>
            <p className={styles.about}>
              Développeur web indépendant : sites vitrines, boutiques en ligne, développement sur mesure et maintenance.
            </p>
          </div>

          <div className={styles.columns}>
            {FOOTER_COLUMNS.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className={styles.colTitle}>{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  {column.title === "Contact" && SITE.contactEmail && (
                    <li>
                      <a href={`mailto:${SITE.contactEmail}`} className={styles.link}>
                        {SITE.contactEmail}
                      </a>
                    </li>
                  )}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className={styles.legal}>
          <span>
            © {year} {SITE.name}
          </span>
          <span>
            {LEGAL_LINKS.map((link, i) => (
              <span key={link.href}>
                {i > 0 && " · "}
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
          </span>
        </div>
      </Container>
    </footer>
  );
}
