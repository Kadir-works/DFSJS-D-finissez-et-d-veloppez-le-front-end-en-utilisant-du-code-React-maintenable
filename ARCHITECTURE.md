# Architecture Front-End

## Structure du projet

```text
src/
├── components/
│   └── Indicator.tsx
├── hooks/
│   └── useData.ts
├── models/
│   └── Country.ts
├── pages/
│   ├── Home.tsx
│   └── Country.tsx
├── utils/
│   ├── chart.ts
│   └── medals.ts
├── App.tsx
└── main.tsx
```

## Composants

### Home.tsx

Page principale de l'application.

Responsabilités :

* afficher les statistiques générales ;
* afficher le graphique des médailles ;
* récupérer les données via le hook useData.

### Country.tsx

Page de détail d'un pays.

Responsabilités :

* afficher les informations d'un pays ;
* afficher les statistiques du pays ;
* afficher le graphique d'évolution des médailles.

### Indicator.tsx

Composant de présentation réutilisable.

Responsabilités :

* afficher une statistique ;
* éviter la duplication de code entre les pages.

## Modèles

### Country.ts

Décrit la structure des données utilisées dans l'application.

Interfaces :

* Country
* Participation

Le typage TypeScript permet de supprimer l'utilisation de any et sécurise les manipulations de données.

## Hooks

### useData.ts

Custom Hook centralisant l'accès aux données.

Responsabilités :

* fournir les données de l'application ;
* gérer l'état de chargement ;
* servir de point d'entrée unique pour l'accès aux données.

Cette approche facilitera le remplacement futur des données statiques par des appels API.

## Utilitaires

### medals.ts

Contient la logique métier liée au calcul des médailles.

Fonction :

* calculateTotalMedals()

### chart.ts

Contient la préparation des données et options des graphiques.

Fonctions :

* createEvolutionData()
* evolutionOptions

Cette séparation permet de conserver des composants plus simples et plus lisibles.

## Évolution future

L'architecture actuelle prépare l'intégration d'une API back-end.

Les composants restent concentrés sur l'affichage tandis que les hooks centralisent l'accès aux données.

Cette organisation améliore :

* la maintenabilité ;
* la lisibilité ;
* la réutilisabilité ;
* l'évolutivité du projet.
