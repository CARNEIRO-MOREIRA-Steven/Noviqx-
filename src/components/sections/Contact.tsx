import { Suspense } from "react";
import { SITE } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <div className={styles.band}>
      <Container>
        <Section id="contact" labelledBy="contact-title">
          <div className={styles.grid}>
            <div>
              <Eyebrow dot>Contact</Eyebrow>
              <h2 id="contact-title" className={styles.title}>
                Et si votre prochain site devenait votre meilleur outil commercial ?
              </h2>
              <p className={styles.lede}>
                Présentez-moi votre projet, vos objectifs et vos contraintes. Je vous aiderai à identifier la solution
                la plus adaptée, avec une proposition claire et un périmètre défini.
              </p>
              <div className={styles.actions}>
                <Button href="#contact-form" arrow>
                  Parler de mon projet
                </Button>
                <Button href="#contact-form" variant="ghost">
                  Demander un devis
                </Button>
              </div>
              {SITE.contactEmail && (
                <p className={styles.alt}>
                  Vous préférez écrire ? <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
                </p>
              )}
            </div>

            {/* useSearchParams exige une frontière Suspense : la page reste statique. */}
            <Suspense fallback={<div className={styles.formFallback} aria-hidden="true" />}>
              <ContactForm />
            </Suspense>
          </div>
        </Section>
      </Container>
    </div>
  );
}
