# Dashboard Hospitalier

## Description du Projet

Ce projet est un tableau de bord interactif conçu pour afficher des données hospitalières telles que les spécialités des médecins, les hospitalisations mensuelles et une vue d'ensemble des patients, médecins, infirmiers, et taux de satisfaction. Il utilise **React** pour le frontend, **Redux** pour la gestion d'état global, et **i18next** pour la gestion de la traduction bilingue (Français / Anglais).

## Choix Techniques

1. **React** : Le framework principal utilisé pour construire l'interface utilisateur. Il permet de structurer l'application sous forme de composants réutilisables.
2. **Redux** : Utilisé pour gérer l'état global de l'application, en particulier pour la sélection du mois et de l'année dans le filtre d'hospitalisations.
3. **i18next** : Une bibliothèque puissante pour la gestion de la traduction. Elle permet de basculer entre plusieurs langues dans l'interface utilisateur.
4. **Tailwind CSS** : Utilisé pour styliser l'application. Tailwind permet une personnalisation rapide et facile avec des classes utilitaires CSS.
5. **Recharts** : Une bibliothèque de graphiques intégrée pour afficher des graphiques interactifs dans l'application.
6. **JSON Static Data** : Les données hospitalières sont chargées depuis un fichier JSON statique.
7. **Modularité** : Le projet est organisé en plusieurs composants distincts (`OverviewSection`, `DoctorsChart`, `HospitalizationsChart`) pour une meilleure maintenabilité et réutilisabilité.

## Fonctionnalités

- **Vue d'ensemble** : Affichage des données globales de l'hôpital (nombre de patients, médecins, infirmières, traitements, etc.).
- **Graphiques interactifs** :
  - Graphique à barres montrant la répartition des spécialités médicales.
  - Graphique en ligne affichant les hospitalisations mensuelles, avec des filtres pour sélectionner le mois et l'année.
- **Internationalisation** : Interface bilingue (Français et Anglais) avec basculement dynamique entre les langues via un drapeau dans l'en-tête.
- **Responsive Design** : Utilisation de Tailwind CSS pour assurer une interface responsive, compatible avec les grands écrans, tablettes et téléphones mobiles.

## Prérequis

- **Node.js** (version 14 ou supérieure)
- **npm** (ou **yarn**) pour la gestion des dépendances

## Installation

1. Clonez ce dépôt sur votre machine locale :

   ```bash
   git clone https://github.com/Joelfrancisco60/TestTechniqueDashboard
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd testtechniquedashboard
   ```

3. Installez les dépendances du projet :

   Avec npm :
   ```bash
   npm install
   ```

   Ou avec yarn :
   ```bash
   yarn install
   ```

## Lancer le Projet

1. Pour lancer le projet en mode développement, exécutez :

   Avec npm :
   ```bash
   npm start
   ```

   Ou avec yarn :
   ```bash
   yarn start
   ```

   L'application sera accessible à l'adresse suivante dans votre navigateur : [http://localhost:3000](http://localhost:3000).

## Structure du Projet

```
src/
│
├── Componants/
│   ├── Header/              # Composant d'en-tête avec bascule de langue
│   ├── OverviewSection.js    # Section Vue d'ensemble des données hospitalières
│   ├── DoctorsChart.js       # Section Graphique des spécialités des médecins
│   ├── HospitalizationsChart.js # Section Graphique des hospitalisations
│   └── DashBoard.js          # Composant principal du tableau de bord
│
├── actions/                  # Actions Redux (setMonth, setYear)
├── reducers/                 # Réducteurs Redux pour la gestion des filtres de mois et d'année
├── data/                     # Fichier JSON statique contenant les données hospitalières
│
├── i18n/                     # Configuration de i18next et fichiers de traduction
│
└── App.js                    # Point d'entrée principal de l'application
```

## Gestion des langues

- Les traductions sont gérées par **i18next** et les fichiers de traduction sont stockés dans le dossier \`public/locales/\`.
- Les langues disponibles sont **fr** (Français) et **en** (Anglais).
- Le changement de langue se fait dynamiquement via l'en-tête de l'application, où un drapeau représentant la langue opposée est affiché. En cliquant sur ce drapeau, l'utilisateur peut basculer entre le français et l'anglais.

## Dépendances clés

- **react-i18next** : Pour la gestion des traductions.
- **react-redux** : Pour la gestion de l'état global.
- **recharts** : Pour les graphiques interactifs.
- **tailwindcss** : Pour le design responsive avec des classes utilitaires CSS.

## Informations Complémentaires

### Personnalisation des Données

Les données hospitalières utilisées dans l'application sont actuellement chargées à partir d'un fichier JSON statique \`data_exemple1.JSON\`. Vous pouvez remplacer ce fichier par vos propres données en suivant la structure suivante :

```json
[
  {
    "name": "Nom de l'hôpital",
    "location": "Ville, Pays",
    "overview": {
      "totalPatients": 12345,
      "satisfactionRate": "90%",
      "totalTreatments": 6789,
      "numberOfDoctors": 150,
      "numberOfNurses": 300
    },
    "monthlyHospitalizations": [
      { "month": "Jan", "year": 2023, "value": 1500 },
      { "month": "Feb", "year": 2023, "value": 1600 },
      ...
    ],
    "doctorSpecialties": [
      { "specialty": "Cardiologie", "numberOfDoctors": 50 },
      ...
    ]
  }
]
```

### Build pour Production

Pour créer une version optimisée du projet :

Avec npm :
```bash
npm run build
```

Ou avec yarn :
```bash
yarn build
```

Les fichiers compilés se trouveront dans le dossier \`build/\` et seront prêts à être déployés.