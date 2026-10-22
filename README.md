# NOVIQX | Solutions digitales

Site officiel de NOVIQX : Next.js (App Router), React 19, TypeScript, CSS Modules. Aucune dépendance d'interface, aucune requête vers un service tiers au chargement.

## Démarrer

```bash
npm install
cp .env.example .env.local   # puis renseigner les variables (voir ci-dessous)
npm run dev                  # http://localhost:3000
npm run typecheck
npm run build && npm start
```

Prérequis : Node.js 20.9 ou plus.

## Structure

```
src/
├─ app/
│  ├─ layout.tsx                  métadonnées, polices, header/footer
│  ├─ page.tsx                    assemblage des sections + JSON-LD
│  ├─ api/contact/route.ts        réception sécurisée du formulaire
│  ├─ sitemap.ts · robots.ts · icon.svg · opengraph-image.tsx · not-found.tsx
│  ├─ mentions-legales/ · politique-de-confidentialite/   (noindex tant que non complétées)
│  ├─ fonts.ts                    polices auto-hébergées
│  └─ globals.css                 tokens de marque et base typographique
├─ components/
│  ├─ ui/         Button, Container, Section, SectionHead, Eyebrow, FeatureList, TagList, Logo, JsonLd
│  ├─ layout/     Header (client), Footer, LegalPage
│  ├─ sections/   Hero, Band, Services, Portfolio, Pricing, Method, Why, Local, Faq, Contact
│  ├─ showcase/   HeroShowcase (maquettes en CSS)
│  └─ contact/    ContactForm (client), Field
├─ data/          tous les contenus : services, tarifs, portfolio, FAQ, méthode, navigation, légal
├─ lib/           contact (validation partagée client/serveur), mailer, rate-limit, links, cx
└─ config/site.ts nom, URL, titre et description du site
```

Règle : **les textes se modifient dans `src/data/`**, jamais dans les composants. Chaque composant a son fichier `.module.css`.

## Modifier les contenus

| Besoin | Fichier |
| --- | --- |
| Prix et formules | `src/data/pricing.ts` |
| Services | `src/data/services.ts` |
| Ajouter un vrai projet au portfolio | `src/data/portfolio.ts` (passer `demo` à `false`, renseigner `url` et `image`, déposer la capture dans `public/`) |
| Questions de la FAQ (aussi reprises dans le JSON-LD) | `src/data/faq.ts` |
| Couleurs, polices | `src/app/globals.css` |
| Title, description, URL | `src/config/site.ts` |

## Formulaire de contact

Le navigateur envoie un JSON à `POST /api/contact`. Le serveur revalide tout (`src/lib/contact.ts`), vérifie l'origine, applique une limite de débit, ignore les robots (champ piège), puis envoie l'e-mail via l'API Resend avec des clés lues côté serveur uniquement.

Variables à définir (voir `.env.example`) : `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`. Le domaine d'envoi doit être vérifié chez Resend. Tant qu'elles sont absentes, l'API répond 503 et le formulaire l'indique au visiteur : rien n'est simulé.

Pour changer de fournisseur d'e-mail, seul `src/lib/mailer.ts` est à modifier.

## Performance

- Page d'accueil entièrement statique (prérendue au build), seul le formulaire est interactif.
- Composants client limités à : `Header`, `PortfolioFilter` (filtre, masquage en CSS) et `ContactForm`.
- Polices auto-hébergées via `next/font` (préchargées, métriques de repli).
- Maquettes du hero et du portfolio en CSS : pas d'image dans le LCP.
- FAQ en `<details>` natifs : zéro JavaScript.
- Pour les captures réelles, utiliser `next/image` (déjà branché dans `ProjectCard`) avec une `priority` uniquement si l'image est dans le premier écran.

## Déploiement

Compatible Vercel ou tout hébergeur Node (`npm run build && npm start`). Définir les variables d'environnement, puis suivre `CHECKLIST-MISE-EN-PRODUCTION.md`.
