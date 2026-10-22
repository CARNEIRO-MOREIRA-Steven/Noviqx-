# NOVIQX — Checklist de mise en production

## Variables d'environnement
- [ ] `NEXT_PUBLIC_SITE_URL` = `https://noviqx.fr`
- [ ] `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (domaine vérifié chez Resend)
- [ ] `NEXT_PUBLIC_CONTACT_EMAIL` : à renseigner seulement après avoir vérifié que contact@noviqx.fr reçoit bien. Vide = aucune adresse affichée.
- [ ] Envoyer une vraie demande depuis le site : e-mail reçu, Reply-To correct.

## À renseigner (rien n'a été inventé)
- [ ] Mentions légales : éditeur, statut, SIRET, adresse, hébergeur, directeur de publication (`src/data/legal.ts`).
- [ ] Politique de confidentialité : prestataire d'envoi, durée de conservation, contact (`src/data/legal.ts`).
- [ ] Retirer `robots: { index: false }` des deux pages légales et les ajouter à `src/app/sitemap.ts` une fois complétées.
- [ ] Réseaux sociaux professionnels : seulement avec les URL officielles.
- [ ] Logo officiel : remplacer le logotype texte dans `src/components/ui/Logo.tsx`.

## À valider (rédigé par défaut)
- [ ] Grille tarifaire (`src/data/pricing.ts`) : 1 599 / 2 199 / 2 799 €, boutique 1 499 €, maintenance 50 et 80 €/mois.
- [ ] Réponse FAQ « propriété du site » (`src/data/faq.ts`) à aligner sur vos conditions de vente.
- [ ] Zone d'intervention et mention « sans accueil du public » (`src/components/sections/Local.tsx`).

## Portfolio
- [ ] Remplacer les 3 concepts par vos projets livrés, après accord des clients (`src/data/portfolio.ts`).
- [ ] Retirer la légende « Concepts de démonstration » du hero quand les maquettes sont remplacées.

## SEO
- [ ] Domaine : www redirigé vers `noviqx.fr` (déjà dans `next.config.ts`, à confirmer chez l'hébergeur), HTTP vers HTTPS.
- [ ] Déclarer `https://noviqx.fr/sitemap.xml` dans Google Search Console.
- [ ] Vérifier le rendu de l'image de partage (`/opengraph-image`) et les balises Open Graph.
- [ ] Données structurées : tester avec le test des résultats enrichis (aucune adresse ni avis déclaré).
- [ ] Pages dédiées à créer ensuite : création de site vitrine, boutique en ligne, développement sur mesure, maintenance. Pas de pages de villes quasi identiques.
- [ ] Mesure d'audience sans cookie si souhaitée. Pas de bannière tant qu'aucun traceur n'est installé.

## Qualité avant lancement
- [ ] Lighthouse mobile (performance, accessibilité, SEO, bonnes pratiques) sur l'URL de production.
- [ ] Tests : petit smartphone, smartphone récent, tablette, portable, écran large ; navigation clavier ; zoom 200 %.
- [ ] Limite de débit : en serverless elle est « au mieux » (mémoire par instance). Passer à un stockage partagé si le trafic augmente (`src/lib/rate-limit.ts`).
