# MiyuValkyrie - Landing Page

Landing page statique pour MiyuValkyrie, streameuse Twitch et challenge-runneuse.

## Technologies

- **Astro** - Framework pour sites statiques
- **React** - Composants interactifs
- **TypeScript** - Typage statique
- **CSS** - Styles modulaires par section

## Structure du projet

```
src/
├── components/       # Composants React
│   ├── Hero.tsx
│   ├── CurrentChallenge.tsx
│   ├── About.tsx
│   ├── OtherChallenges.tsx
│   ├── Socials.tsx
│   ├── Footer.tsx
│   ├── LanguageSelector.tsx
│   └── App.tsx
├── i18n/            # Système de traduction
│   ├── translations.ts
│   └── languageContext.tsx
├── pages/           # Pages Astro
│   └── index.astro
└── styles/          # Fichiers CSS par section
    ├── global.css
    ├── hero.css
    ├── currentChallenge.css
    ├── about.css
    ├── otherChallenges.css
    ├── socials.css
    └── footer.css

public/
└── medias/          # Médias (vidéo, images)
```

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:4321`

## Build

```bash
npm run build
```

Les fichiers statiques seront générés dans le dossier `dist/`

## Prévisualisation

```bash
npm run preview
```

## Fonctionnalités

- ✅ Section Hero avec vidéo en background
- ✅ Section Challenge en cours avec intégration YouTube
- ✅ Section À propos avec photo de profil
- ✅ Section Autres challenges avec grille de vidéos
- ✅ Section Réseaux sociaux avec boutons interactifs
- ✅ Footer avec navigation
- ✅ Système de traduction (FR, EN, ES)
- ✅ Design responsive
- ✅ Thème sombre avec effets dorés et braises rougeoyantes
- ✅ Animations et effets hover

## Langues supportées

- Français (FR)
- Anglais (EN)
- Espagnol (ES)

Le sélecteur de langue est disponible en haut à droite de la page.
