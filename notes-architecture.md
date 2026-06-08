# Analyse de l'architecture existante

## Problèmes identifiés

### 1. Données hardcodées dans App.tsx

Le tableau olympicsData est directement déclaré dans le composant principal.
Les données devraient être externalisées dans un hook ou un service dédié.

### 2. Utilisation du type any

Le projet utilise plusieurs types any.
Cela supprime les bénéfices du typage TypeScript.

### 3. Logique métier dans les composants

Les calculs de statistiques sont directement réalisés dans les composants.

Exemples :
- totalMedals
- totalAthletes
- totalParticipations

Cette logique devrait être déplacée dans des hooks ou utilitaires.

### 4. Mauvaise gestion du chargement

Le chargement des données est simulé dans le composant Home.

Cette logique devrait être centralisée dans un Custom Hook.

### 5. Console.log inutiles

Plusieurs console.log sont présents dans le code.

Ils doivent être supprimés avant la mise en production.

### 6. App.tsx trop volumineux

Le fichier contient :
- les données
- les composants
- le routage
- les graphiques
- la logique métier

Les responsabilités sont mélangées.

### 7. Composants réutilisables absents

Les cartes statistiques sont dupliquées plusieurs fois.

Un composant réutilisable devrait être créé.

### 8. Plusieurs composants dans le même fichier

Home et Country sont définis dans App.tsx.

Chaque composant devrait être isolé dans son propre fichier.

### 9. Préparation des données graphiques dans les composants

Les données Chart.js sont construites directement dans les composants.

Cette logique devrait être externalisée.

### 10. Absence d'une architecture modulaire

Le projet ne possède pas :
- components/
- pages/
- hooks/
- models/

Cela rend le projet difficile à maintenir et à faire évoluer.