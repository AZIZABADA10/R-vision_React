# R-vision React

Bienvenue dans **R-vision_React**, un projet éducatif développé avec **React.js**. Ce projet regroupe plusieurs composants pour explorer des concepts clés de React à travers des mini-exercices et des fonctionnalités interactives comme un compteur et un mini-jeu.

---

## Structure du projet

```

src/
├── compteur/
│   └── Compteur.jsx         # Composant de compteur avec états et événements
├── IntroToReact/
│   ├── Personnes.jsx        # Affichage de données dynamiques (liste de personnes)
│   └── Products.jsx         # Liste de produits pour pratiquer les props et boucles
├── TP-JEU/
│   └── Jeu.jsx              # Mini-jeu avec gestion d’état et logique conditionnelle
├── App.css                  # Styles globaux pour l'application
├── App.js                   # Composant principal qui regroupe tous les autres
├── App.test.js              # Tests unitaires de base avec React Testing Library
└── index.css                # Feuille de style principale

````

---

## Fonctionnalités principales

### Compteur (`compteur/Compteur.jsx`)
- Incrémentation, décrémentation, remise à zéro.
- Utilisation du hook `useState`.
- Affichage dynamique.

### Personnes (`IntroToReact/Personnes.jsx`)
- Affiche une liste de personnes à partir d’un tableau d’objets.
- Utilisation de `.map()` et transmission de `props`.

### Produits (`IntroToReact/Products.jsx`)
- Affichage d’une liste de produits avec nom et prix.
- Introduction aux composants fonctionnels et aux `props`.

### Jeu (`TP-JEU/Jeu.jsx`)
- Mini-jeu basé sur des conditions.
- Utilisation avancée du `useState` et des événements utilisateur.

---

## Démarrage rapide

### 1. Cloner le dépôt

```bash
git clone https://github.com/AZIZABADA10/R-vision_React.git
cd R-vision_React
````

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le projet

```bash
npm start
```

L'application sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000)

---

## Tests

Exécuter les tests avec la commande suivante :

```bash
npm test
```

Cela lancera les tests unitaires définis dans `App.test.js`.

---

## Technologies utilisées

* React.js
* JavaScript ES6+
* CSS

---

## Développé par

**ABADA AZIZ**
