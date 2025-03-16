<?php
// controllers/HomeController.php

class HomeController
{
    public function index()
    {
        // Vérifier si l'utilisateur est connecté
        session_start();
        $isLoggedIn = isset($_SESSION['user_id']);
        $username = $isLoggedIn ? $_SESSION['username'] : '';

        require_once 'views/Accueil.php';
    }
}
