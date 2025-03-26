<?php
// controllers/AuthController.php

require_once 'models/User.php';
require_once 'config/Database.php';

class AuthController
{
    private $user;
    private $db;

    public function __construct()
    {
        // Connexion à la base de données
        $database = new Database();
        $this->db = $database->getConnection();

        // Initialisation du modèle User
        $this->user = new User($this->db);
    }

    // Afficher la page de connexion
    public function showLoginForm()
    {
        $errors = [];
        require_once 'views/auth/login.php';
    }

    // Afficher le formulaire d'inscription
    public function showRegisterForm()
    {
        $errors = [];
        require_once 'views/auth/register.php';
    }

    // Traiter la connexion
    public function login()
    {
        $errors = [];

        // Vérification des données POST
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $email = isset($_POST['email']) ? trim($_POST['email']) : "";
            $password = isset($_POST['password']) ? trim($_POST['password']) : "";

            // Validation basique
            if (empty($email)) {
                $errors[] = "L'email est requis";
            }
            if (empty($password)) {
                $errors[] = "Le mot de passe est requis";
            }

            // Si pas d'erreurs, tenter l'authentification
            if (empty($errors)) {
                if ($this->user->authenticate($email, $password)) {
                    // Démarrer une session
                    session_start();
                    $_SESSION['user_id'] = $this->user->id;
                    $_SESSION['username'] = $this->user->username;

                    // Redirection vers la page d'accueil
                    header("Location: /");
                    exit;
                } else {
                    $errors[] = "Email ou mot de passe incorrect";
                }
            }
        }

        // En cas d'erreur, réafficher le formulaire
        require_once 'views/auth/login.php';
    }

    // Traiter l'inscription
    public function register()
    {
        $errors = [];

        // Vérification des données POST
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $username = isset($_POST['username']) ? trim($_POST['username']) : "";
            $email = isset($_POST['email']) ? trim($_POST['email']) : "";
            $password = isset($_POST['password']) ? trim($_POST['password']) : "";
            $confirm_password = isset($_POST['confirm_password']) ? trim($_POST['confirm_password']) : "";

            // Validation basique
            if (empty($username)) {
                $errors[] = "Le nom d'utilisateur est requis";
            }
            if (empty($email)) {
                $errors[] = "L'email est requis";
            } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $errors[] = "Format d'email invalide";
            }
            if (empty($password)) {
                $errors[] = "Le mot de passe est requis";
            } else if (strlen($password) < 6) {
                $errors[] = "Le mot de passe doit contenir au moins 6 caractères";
            }
            if ($password !== $confirm_password) {
                $errors[] = "Les mots de passe ne correspondent pas";
            }

            // Vérifier si l'email existe déjà
            $this->user->email = $email;
            if ($this->user->emailExists()) {
                $errors[] = "Cet email est déjà utilisé";
            }

            // Si pas d'erreurs, créer l'utilisateur
            if (empty($errors)) {
                $this->user->username = $username;
                $this->user->email = $email;
                $this->user->password = $password;

                if ($this->user->create()) {
                    // Redirection vers la page de connexion avec message
                    header("Location: /login?success=1");
                    exit;
                } else {
                    $errors[] = "Une erreur s'est produite lors de l'inscription";
                }
            }
        }

        // En cas d'erreur, réafficher le formulaire
        require_once 'views/auth/register.php';
    }

    // Déconnexion
    public function logout()
    {
        session_start();
        session_unset();
        session_destroy();

        // Redirection vers la page de connexion
        header("Location: /login");
        exit;
    }
}
