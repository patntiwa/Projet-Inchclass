<!DOCTYPE html>
<html>

<head>
    <title>Formulaire simple</title>
</head>

<body>
    <?php
    // Création d'un cookie
    setcookie("utilisateur", "Pierre", time() + 3600); // Expire dans 1 heure

    // Vérification et lecture du cookie
    if (isset($_COOKIE["utilisateur"])) {
        echo "Bienvenue " . $_COOKIE["utilisateur"];
    } else {
        echo "Nouveau visiteur";
    }
    ?>
    <?php
    // Démarrer la session
    session_start();

    // Stocker des données dans la session
    $_SESSION['nom'] = "Pierre";
    $_SESSION['est_connecte'] = true;

    // Lire les données de la session
    if (isset($_SESSION['est_connecte']) && $_SESSION['est_connecte'] === true) {
        echo "Utilisateur connecté : " . $_SESSION['nom'];
    } else {
        echo "Utilisateur non connecté";
    }

    // Pour détruire la session
    // session_destroy();
    ?>
    <form method="POST" action="">
        <input type="text" name="nom" placeholder="Votre nom"><br>
        <input type="email" name="email" placeholder="Votre email"><br>
        <input type="submit" value="Envoyer">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nom = $_POST['nom'];
        $email = $_POST['email'];
        echo "Bonjour $nom, votre email est $email";
    }
    ?>
</body>

</html>