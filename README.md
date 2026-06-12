# TéléSport - Olympic Games History Dashboard

Application web React permettant de visualiser les performances historiques de différents pays aux Jeux Olympiques.

## 🚀 Fonctionnalités

- Tableau de bord interactif présentant les statistiques olympiques.
- Visualisation des médailles par pays via un graphique circulaire.
- Navigation vers la fiche détaillée d'un pays.
- Affichage des statistiques détaillées :
  - nombre de participations ;
  - nombre total de médailles ;
  - nombre total d’athlètes.

- Graphique d’évolution des performances d’un pays.
- Gestion des erreurs :
  - URL inconnue (404) ;
  - pays introuvable.

- Interface responsive (desktop et mobile).

---

## 🛠️ Technologies utilisées

| Technologie      | Version |
| ---------------- | ------- |
| React            | 19.2.0  |
| React DOM        | 19.2.0  |
| TypeScript       | 5.9.3   |
| Vite             | 7.2.4   |
| React Router DOM | 6.22.0  |
| Chart.js         | 4.4.1   |
| React ChartJS 2  | 5.2.0   |
| Tailwind CSS     | 4.1.18  |
| ESLint           | 9.39.1  |

---

## 📋 Prérequis

- Node.js 22 ou supérieur
- npm

---

## ⚙️ Installation

Cloner le projet :

```bash
git clone <url-du-repository>
cd p2-dfsjs
```

Installer les dépendances :

```bash
npm install
```

---

## ▶️ Lancer le projet

Mode développement :

```bash
npm run dev
```

L’application sera disponible à l’adresse :

```text
http://localhost:5173
```

---

## 🏗️ Architecture du projet

```text
src/
├── components/
│   └── Indicator.tsx
│
├── hooks/
│   └── useData.ts
│
├── models/
│   └── Country.ts
│
├── pages/
│   ├── Home.tsx
│   ├── Country.tsx
│   └── NotFound.tsx
│
├── utils/
│   ├── chart.ts
│   └── medals.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

### Description des dossiers

#### components/

Contient les composants réutilisables de l'application.

#### hooks/

Contient les hooks personnalisés permettant de centraliser la logique d'accès aux données.

#### models/

Contient les types TypeScript utilisés dans le projet.

#### pages/

Contient les pages principales de l'application.

#### utils/

Contient les fonctions utilitaires et la logique métier indépendante des composants React.

---

## 📊 Architecture mise en place

Le projet a été refactorisé afin de respecter les bonnes pratiques React :

- séparation des responsabilités ;
- composants réutilisables ;
- suppression des anti-patterns identifiés ;
- typage TypeScript renforcé ;
- centralisation de la logique métier ;
- préparation à une future intégration d'API backend.

Une documentation complémentaire est disponible dans le fichier :

```text
ARCHITECTURE.md
```

---

## 📱 Responsive Design

L'application a été testée :

- en version desktop ;
- en version mobile (DevTools Chrome).

---

## 🚨 Gestion des erreurs

L'application gère :

- les routes inexistantes via une page 404 ;
- les identifiants de pays invalides ;
- les tentatives d'accès à des données inexistantes.

---

## 📷 Captures d’écran

Créer un dossier :

```text
screenshots/
```

Exemple :

```text
screenshots/
├── home-desktop.png
├── home-mobile.png
├── country-desktop.png
├── country-mobile.png
```

---

## 🔍 Vérification qualité

Commande de lint :

```bash
npm run lint
```

Build de production :

```bash
npm run build
```

---

## 📚 Projet OpenClassrooms

Projet réalisé dans le cadre de la formation :

**Développeur Front-End JavaScript React**

Objectifs :

- Architecture React maintenable ;
- React Router ;
- TypeScript ;
- Refactorisation de code ;
- Bonnes pratiques de développement.

---

## 📝 Licence

Projet réalisé à des fins pédagogiques dans le cadre de la formation OpenClassrooms.
