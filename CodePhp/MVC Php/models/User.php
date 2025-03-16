<?php
// models/User.php

class User
{
    private $conn;
    private $table = "users";

    // Propriétés
    public $id;
    public $username;
    public $email;
    public $password;
    public $created_at;

    // Constructeur avec connexion à la BDD
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // Créer un nouvel utilisateur
    public function create()
    {
        // Requête d'insertion
        $query = "INSERT INTO " . $this->table . " 
                  SET username = :username, 
                      email = :email, 
                      password = :password";

        // Préparation de la requête
        $stmt = $this->conn->prepare($query);

        // Nettoyage des données
        $this->username = htmlspecialchars(strip_tags($this->username));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->password = htmlspecialchars(strip_tags($this->password));

        // Hashage du mot de passe
        $this->password = password_hash($this->password, PASSWORD_DEFAULT);

        // Liaison des paramètres
        $stmt->bindParam(":username", $this->username);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":password", $this->password);

        // Exécution
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    // Vérifier si un utilisateur existe (par email)
    public function emailExists()
    {
        $query = "SELECT id, username, password 
                FROM " . $this->table . " 
                WHERE email = ? 
                LIMIT 0,1";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->email);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            $this->id = $row['id'];
            $this->username = $row['username'];
            $this->password = $row['password'];

            return true;
        }

        return false;
    }

    // Authentifier un utilisateur
    public function authenticate($email, $password)
    {
        $this->email = $email;

        // Vérifier si l'email existe
        if ($this->emailExists()) {
            // Vérifier le mot de passe
            if (password_verify($password, $this->password)) {
                return true;
            }
        }

        return false;
    }
}
