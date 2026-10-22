import { ADDONS, PLANS, PRICING_NOTE, SHOP_OFFER, type Plan } from "@/data/pricing";
import { contactHref } from "@/lib/links";
import { cx } from "@/lib/cx";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeatureList } from "@/components/ui/FeatureList";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import styles from "./Pricing.module.css";

export function Pricing() {
  return (
    <Container>
      <Section id="tarifs" labelledBy="tarifs-title">
        <SectionHead
          id="tarifs-title"
          eyebrow="Tarifs"
          title="Le budget à prévoir, affiché dès le départ."
          lede="Prix de départ pour la création de sites. Il ne s’agit pas d’abonnements. Le devis précise ensuite le périmètre exact."
        />

        <div className={styles.plans}>
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className={styles.shop}>
          <div className={styles.shopIntro}>
            <Eyebrow>Offre boutique en ligne</Eyebrow>
            <h3>{SHOP_OFFER.name}</h3>
            <Price value={SHOP_OFFER.price} />
            <p className={styles.target}>{SHOP_OFFER.target}</p>
            <p className={styles.limit}>
              <b>Chiffrés à part :</b> {SHOP_OFFER.separate}
            </p>
            <Button href={contactHref(SHOP_OFFER.cta.type, SHOP_OFFER.cta.budget)} className={styles.shopCta}>
              {SHOP_OFFER.cta.label}
            </Button>
          </div>
          <FeatureList items={SHOP_OFFER.features} />
        </div>

        <div className={styles.addons}>
          <div>
            <Eyebrow>Prestations complémentaires</Eyebrow>
            <h3 className={styles.addonsTitle}>Après la mise en ligne, et pour les sites existants.</h3>
            <p className={styles.addonsText}>
              Les forfaits mensuels couvrent un périmètre défini au devis : mises à jour, vérifications et suivi
              technique. Ils n’incluent pas de prestations illimitées.
            </p>
          </div>
          <dl className={styles.list}>
            {ADDONS.map((addon) => (
              <div key={addon.label} className={styles.row}>
                <dt>{addon.label}</dt>
                <dd className={cx(addon.accent && styles.accent)}>{addon.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className={styles.note}>{PRICING_NOTE}</p>
      </Section>
    </Container>
  );
}

function Price({ value }: { value: string }) {
  return (
    <div className={styles.price}>
      <em>à partir de</em>
      <b>{value}</b>
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className={cx(styles.plan, plan.highlight && styles.hot)}>
      <div className={styles.planHead}>
        <h3>{plan.name}</h3>
        {plan.badge && <small>{plan.badge}</small>}
      </div>
      <Price value={plan.price} />
      <p className={styles.target}>{plan.target}</p>
      <FeatureList items={plan.features} />
      <p className={cx(styles.limit, styles.limitRule)}>
        <b>Limites :</b> {plan.limit}
      </p>
      <Button
        href={contactHref(plan.cta.type, plan.cta.budget)}
        variant={plan.highlight ? "primary" : "ghost"}
        className={styles.planCta}
      >
        {plan.cta.label}
      </Button>
    </article>
  );
}
