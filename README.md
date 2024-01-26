# Brief Site d’achat de Véhicule

## Contexte du projet

Ce projet vise à concevoir et à modéliser une plateforme de ventes de véhicules.
L'approche utilisée est basée sur le standard UML pour assurer une modélisation systématique et complète du système.

Un `Utilisateur` peut:

- Créer son compte
- Se connecter
- Modifier son compte
- Supprimer son compte
- Choisir un véhicule
- Personnaliser le véhicule
- Valider la commande
- Suivre la commande
- Etre notifier en cas de retard
- Etre notifier en cas de changement d’étape

## Choix des design patterns

Les design patterns utilisés sont :

- La Factory
- Le Décorateur
- Le Singleton

---

La factory nous permet de fabriquer plusieurs types de véhicules tels que des voitures, des camions, des motos…, si plus tard, de nouveaux types de véhicule venait à être ajouté, cela faciliterait la maintenance du site web.

---

Le décorateur nous permet d’étendre les fonctionnalités des notifications qui seront envoyées à l’utilisateur de sorte à ce qu’ils puissent être envoyés en email, par téléphone ou toute autre méthode souhaitée. L’utilisation du décorateur nous permettra d’ajouter d’autre types de notification plus tard au gré du client. Grâce à ce Design pattern, nous pourrons laisser l’utilisateur choisir la ou les méthodes de notification de son choix.

---

Le Singleton nous permettra d’instancier une classe afin d’avoir une connexion à la base de données qu’en un seul exemplaire, tout en fournissant un point d’accès global à cette instance.
Le Singleton assure qu’une nouvelle instance de la classe ne sera pas créée si une instance existe déjà.

---

## Livrables

Le rendu se compose en :

- Un diagramme de cas d’utilisation
- Un diagramme de classes
- Les diagrammes de séquences
- Les Wireframes
- Les Maquettes
- Le dictionnaire de données
- Le MCD
- Le MPD

## Contributeurs

-**_Thomas Baudrin_**

<a href="https://github.com/Thomas6A"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></img></a>

-**_Florian Poteau_**

<a href="https://github.com/florianpoteau"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></img></a>
