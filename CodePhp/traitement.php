<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    echo "<p>Question 2 : Traitement des données POST</p>";
    echo "<p> Nom : $nom </p>";
    echo "<p> Email : $email </p>";
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    echo "<p>Question 4 : Traitement des données GET</p>";
    $nom = $_GET["nom"];
    $email = $_GET["email"];
    echo "<p> Nom : $nom </p>";
    echo "<p> Email : $email </p>";
}
