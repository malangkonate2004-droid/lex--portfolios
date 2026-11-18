# CLAUDE.md — Portfolio Malang Konaté

## Contexte

Portfolio personnel de **Malang dit Niaka Konaté**, étudiant en Licence 3 Cybersécurité à l'ISI Dakar.
Le site présente son profil et ses réalisations de façon claire et crédible à un visiteur professionnel
(recruteur, client, pair) en moins de 30 secondes.

## Stack technique

- **Framework** : Next.js 16.4.6 (App Router, Turbopack)
- **Langage** : TypeScript (strict)
- **Styles** : Tailwind CSS (avec variables CSS pour support du mode sombre, mode clair par défaut)
- **Icônes** : lucide-react (Network, Server, ShieldCheck, Code2, etc.)
- **Déploiement** : Vercel (export statique : `output: "export"`, `images: { unoptimized: true }`)
- **Sécurité** : En-têtes HTTP de sécurité gérés via `vercel.json` (CSP stricte, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS)
- **SEO Statique** : `sitemap.xml` et `robots.txt` dans `/public`
- **Architecture** : Statique, sans backend, sans base de données, sans API

## Règles de contenu

1. **Source de vérité unique** : le CV (`cv/CV_Malang_Konate_Securite.pdf`). Ne jamais inventer de dates, chiffres, résultats ou liens. Si une donnée manque, placer un `TODO` explicite.
2. **Aucune mention de candidature** : le site ne doit mentionner nulle part que Malang cherche un stage, un emploi ou une alternance. Il présente son profil et ses compétences, pas une candidature.
3. **Pas de numéro de téléphone** : le numéro de téléphone ne doit apparaître nulle part dans le code public. Seuls l'email (lien `mailto:` avec objet neutre) et la localisation sont affichés.
4. **Téléchargement du CV** : bouton dans la section Hero pointant vers `/cv.pdf` (fichier public issu de `cv/CV_Malang_Konate_Securite.pdf`). Le dossier `cv/` source reste ignoré par `.gitignore`.
5. **Footer dynamique** : année générée dynamiquement avec `new Date().getFullYear()`, pas d'année statique en dur.
6. **Textes centralisés** : tous les textes et structures de données résident dans `src/data/content.ts`, jamais en dur dans les composants.

## Palette de couleurs

| Rôle                  | Light Mode    | Dark Mode     |
|-----------------------|---------------|---------------|
| Primaire (bleu marine)| `#1F3864`     | `#93C5FD`     |
| Accent (bleu)         | `#2E75B6`     | `#60A5FA`     |
| Fond                  | `#EAF1F8`     | `#0B1120`     |
| Carte / surface       | `#FFFFFF`     | `#1E293B`     |
| Bordure carte         | `#D1E1F0`     | `#334155`     |
| Texte principal       | `#1E293B`     | `#F1F5F9`     |
| Texte secondaire      | `#64748B`     | `#94A3B8`     |

## Conventions de code

- TypeScript strict, aucun type `any`
- Nommage des composants : PascalCase (`Hero.tsx`, `APropos.tsx`)
- Nommage des variables et fonctions : camelCase
- Commentaires en français
- Un composant par fichier
- Aucune variable globale
- Code sobre, lisible et performant sans sur-ingénierie

## Structure du projet

```
src/
  app/
    layout.tsx          # Layout global (Navbar + Footer)
    page.tsx            # Page principale (One-page)
    globals.css         # Styles globaux, variables Tailwind, mode sombre
    projets/[slug]/
      page.tsx          # Page de détail pour chaque projet
  components/           # Composants modulaires (Navbar, Hero, APropos, Projets, Competences, Formation, Contact, Footer)
  data/
    content.ts          # Toutes les données textuelles centralisées
public/
  cv.pdf                # CV téléchargeable directement
  sitemap.xml           # Sitemap statique
  robots.txt            # Directives robots statiques
  images/               # Images et captures d'écran des projets
vercel.json             # Configuration des en-têtes de sécurité
```

## Commandes

```bash
npm run dev       # Serveur local de développement
npm run build     # Export statique (génère le dossier /out)
npm run lint      # Analyse ESLint
```
