import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroShowcase } from "@/components/showcase/HeroShowcase";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <Container>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div>
          <Eyebrow dot>Développement web · Design · E-commerce</Eyebrow>
          <h1 id="hero-title" className={styles.title}>
            Un site web à la <span className={styles.soft}>hauteur de vos</span>{" "}
            <span className={styles.accent}>ambitions.</span>
          </h1>
          <p className={styles.lede}>
            Je conçois des sites web modernes, performants et pensés pour votre activité. De la première maquette à la
            mise en ligne, je vous accompagne avec une approche personnalisée, un design soigné et des solutions
            adaptées à vos objectifs.
          </p>
          <div className={styles.actions}>
            <Button href="/#contact" arrow>
              Discutons de votre projet
            </Button>
            <Button href="/#realisations" variant="ghost">
              Découvrir mes réalisations
            </Button>
          </div>
          <p className={styles.assure}>Un interlocuteur unique, de la conception au suivi.</p>
        </div>

        <HeroShowcase />
      </section>
    </Container>
  );
}
