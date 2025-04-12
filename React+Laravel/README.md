[# Projet React + Laravel - Todo App

Ce projet est une application de gestion de tâches (Todo App) construite avec un frontend en React et un backend en Laravel. L'application permet aux utilisateurs de s'inscrire, de se connecter, de gérer leurs tâches (ajouter, modifier, supprimer, marquer comme terminées) et de se déconnecter.

---

## Fonctionnalités

### Frontend (React)
- Gestion des routes avec `react-router-dom` (routes publiques et privées).
- Authentification via un token JWT stocké dans le `localStorage`.
- Tableau de bord utilisateur avec affichage des tâches.
- Gestion des tâches via des composants React.

### Backend (Laravel)
- API RESTful pour la gestion des utilisateurs et des tâches.
- Authentification avec Sanctum.
- Validation des données et gestion des autorisations.
- Gestion des relations entre utilisateurs et tâches.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- **Node.js** (version 16 ou supérieure)
- **Composer** (gestionnaire de dépendances PHP)
- **PHP** (version 8.1 ou supérieure)
- **MySQL** ou tout autre système de gestion de base de données compatible avec Laravel
- **Git** (pour cloner le projet)

---

## Installation

### Étape 1 : Cloner le projet

Clonez le dépôt dans votre environnement local :

```bash
git clone https://github.com/votre-utilisateur/votre-repo.git
cd votre-repo

### Étape 2 : Installation du backend (Laravel)

Accédez au dossier Laravel :
cd todo-api

Installez les dépendances PHP avec Composer :
composer install

Configurez le fichier .env :
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nom_de_la_base
DB_USERNAME=nom_utilisateur
DB_PASSWORD=mot_de_passe

Copiez le fichier .env.example en .env :
Configurez les informations de connexion à la base de données dans le fichier .env :
Générez la clé d'application Laravel :
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate

6.Lancez le serveur de développement Laravel :
php artisan serve

### Étape 3 : Installation du frontend (React)
cd ../todo-vue

Installez les dépendances Node.js :

npm install

Voici un fichier `README.md` détaillant le travail effectué et la procédure d'installation pour votre projet :

```markdown
# Projet React + Laravel - Todo App

Ce projet est une application de gestion de tâches (Todo App) construite avec un frontend en React et un backend en Laravel. L'application permet aux utilisateurs de s'inscrire, de se connecter, de gérer leurs tâches (ajouter, modifier, supprimer, marquer comme terminées) et de se déconnecter.

---

## Fonctionnalités

### Frontend (React)
- Gestion des routes avec `react-router-dom` (routes publiques et privées).
- Authentification via un token JWT stocké dans le `localStorage`.
- Tableau de bord utilisateur avec affichage des tâches.
- Gestion des tâches via des composants React.

### Backend (Laravel)
- API RESTful pour la gestion des utilisateurs et des tâches.
- Authentification avec Sanctum.
- Validation des données et gestion des autorisations.
- Gestion des relations entre utilisateurs et tâches.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- **Node.js** (version 16 ou supérieure)
- **Composer** (gestionnaire de dépendances PHP)
- **PHP** (version 8.1 ou supérieure)
- **MySQL** ou tout autre système de gestion de base de données compatible avec Laravel
- **Git** (pour cloner le projet)

---

## Installation

### Étape 1 : Cloner le projet

Clonez le dépôt dans votre environnement local :

```bash
git clone https://github.com/patntiwa/Projet-Inchclass.git
cd votre-repo
```

ensuite vous cherchez le dossier React+Laravel

### Étape 2 : Installation du backend (Laravel)

1. Accédez au dossier Laravel :

   ```bash
   cd todo-api
   ```

2. Installez les dépendances PHP avec Composer :

   ```bash
   composer install
   ```

3. Configurez le fichier `.env` :
   - Copiez le fichier `.env.example` en `.env` :

     ```bash
     cp .env.example .env
     ```
   - Configurez les informations de connexion à la base de données dans le fichier `.env` :

     ```env
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=todo-app
     DB_USERNAME=patrick
     DB_PASSWORD=
     ```

4. Générez la clé d'application Laravel :

   ```bash
   php artisan key:generate
   ```

5. Configurez Sanctum pour l'authentification :
   ```bash
   php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
   php artisan migrate
   ```

6. Lancez le serveur de développement Laravel :
   ```bash
   php artisan serve
   ```

   L'API sera disponible à l'adresse : `http://127.0.0.1:8000`.

---

### Étape 3 : Installation du frontend (React)

1. Accédez au dossier React :
   ```bash
   cd ../todo-vue
   ```

2. Installez les dépendances Node.js :
   ```bash
   npm install
   ```

3. Lancez le serveur de développement React :
   ```bash
   npm run dev
   ```

   L'application sera disponible à l'adresse : `http://127.0.0.1:5173`.

---

## Utilisation

1. **Inscription** :
   - Accédez à l'URL `/register` pour créer un compte.

2. **Connexion** :
   - Accédez à l'URL `/login` pour vous connecter.
   - Une fois connecté, un token JWT sera stocké dans le `localStorage`.

3. **Tableau de bord** :
   - Accédez à l'URL `/dashboard` pour gérer vos tâches.
   - Vous pouvez ajouter, modifier, supprimer ou marquer des tâches comme terminées.

4. **Déconnexion** :
   - Cliquez sur le bouton "Déconnexion" pour supprimer le token et revenir à la page de connexion.

---

## Structure du projet

### Frontend (React)
- **`src/pages`** : Composants de pages (Login, Register, Dashboard).
- **`src/components`** : Composants réutilisables (TaskList, etc.).
- **`src/PrivateRoute.jsx`** : Gestion des routes protégées.

### Backend (Laravel)
- **`app/Http/Controllers`** : Contrôleurs API (UserController, TaskController).
- **`app/Models`** : Modèles Eloquent (User, Task).
- **`routes/api.php`** : Définition des routes API.

---

## API Endpoints

### Authentification
- `POST /api/register` : Inscription.
- `POST /api/login` : Connexion.
- `POST /api/logout` : Déconnexion.

### Tâches
- `GET /api/tasks` : Récupérer toutes les tâches.
- `POST /api/tasks` : Créer une nouvelle tâche.
- `GET /api/tasks/{id}` : Récupérer une tâche spécifique.
- `PUT /api/tasks/{id}` : Mettre à jour une tâche.
- `DELETE /api/tasks/{id}` : Supprimer une tâche.
- `PATCH /api/tasks/{id}/toggle` : Basculer l'état de complétion d'une tâche.

---

## Développement

### Lancer les deux serveurs en parallèle
Vous pouvez utiliser deux terminaux pour lancer les serveurs Laravel et React simultanément :
- Terminal 1 : `php artisan serve`
- Terminal 2 : `npm run dev`

---

## Contribution

 vousSi souhaitez contribuer à ce projet, veuillez soumettre une pull request ou ouvrir une issue sur le dépôt GitHub.

---

## Auteurs : Patrick Ntiwa

- **Frontend** : React Developer
- **Backend** : Laravel Developer

---

## Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, de le modifier et de le distribuer.
```
](https://claude.site/artifacts/730fc6b5-7df5-447d-bdec-057f607cbcda)