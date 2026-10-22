"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/navigation";
import { cx } from "@/lib/cx";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import styles from "./Header.module.css";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.split("#")[1]).filter(Boolean);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Bordure discrète une fois la page défilée.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lien actif selon la section visible.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Échap ferme le menu mobile.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={cx(styles.header, scrolled && styles.scrolled)}>
      <Container>
        <div className={styles.bar}>
          <Logo withTagline onClick={close} />

          <nav className={styles.links} aria-label="Navigation principale">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.split("#")[1];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cx(styles.link, isActive && styles.active)}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button href="/#contact" size="sm">
              Parler de mon projet
            </Button>
          </nav>

          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.burgerLines} />
          </button>
        </div>

        <nav id="menu-mobile" className={cx(styles.menu, open && styles.menuOpen)} aria-label="Navigation mobile">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.menuLink} onClick={close}>
              {link.label}
            </Link>
          ))}
          <Button href="/#contact" className={styles.menuCta} onClick={close}>
            Parler de mon projet
          </Button>
        </nav>
      </Container>
    </header>
  );
}
