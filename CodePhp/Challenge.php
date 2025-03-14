<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activité 4</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            margin: 0;
            padding: 40px;
            min-height: 100vh;
        }

        section {
            background-color: #ffffff;
            border-radius: 15px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            margin-bottom: 30px;
            max-width: 1200px;
            margin: 0 auto;
        }

        h1 {
            font-size: 2.5em;
            color: #2c3e50;
            text-align: center;
            margin-bottom: 40px;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        h2 {
            color: #34495e;
            font-size: 1.8em;
            margin-bottom: 20px;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }

        h3 {
            color: #2980b9;
            font-size: 1.3em;
            margin: 20px 0;
        }

        .Box {
            background: #f8f9fa;
            border: none;
            border-radius: 12px;
            padding: 25px;
            margin: 25px 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease;
        }

        .Box:hover {
            transform: translateY(-5px);
        }

        p {
            background-color: #ffffff;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
            border-left: 4px solid #3498db;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        th,
        td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #e0e0e0;
        }

        th {
            background-color: #3498db;
            color: white;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 0.9em;
        }

        tr:nth-child(even) {
            background-color: #f8f9fa;
        }

        tr:hover {
            background-color: #f1f1f1;
        }

        .green {
            color: #27ae60;
            font-weight: bold;
        }

        .red {
            color: #e74c3c;
            font-weight: bold;
        }

        @media (max-width: 768px) {
            body {
                padding: 20px;
            }

            h1 {
                font-size: 2em;
            }

            .Box {
                padding: 15px;
                margin: 15px 0;
            }
        }

        form {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #2c3e50;
            font-weight: 500;
            font-size: 0.9em;
        }

        input[type="text"],
        input[type="email"] {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            border: 2px solid #e0e0e0;
            border-radius: 6px;
            font-size: 1em;
            transition: border-color 0.3s ease;
            box-sizing: border-box;
        }

        input[type="text"]:focus,
        input[type="email"]:focus {
            border-color: #3498db;
            outline: none;
            box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
        }

        input[type="submit"] {
            background: #3498db;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 1em;
            font-weight: 500;
            width: 100%;
            transition: background 0.3s ease;
        }

        input[type="submit"]:hover {
            background: #2980b9;
        }

        /* Animation au focus */
        @keyframes pulse {
            0% {
                transform: scale(1);
            }

            50% {
                transform: scale(1.02);
            }

            100% {
                transform: scale(1);
            }
        }

        input:focus {
            animation: pulse 0.3s ease;
        }
    </style>
</head>

<body>
    <h1>Challenge Inch Class</h1>
    <!-- Exercice 1 -->
    <section>
        <h2 style="color: black; text-align:center;">Exercice 1 </h2>
        <div class='Box'>
            <h2>Question 1 : Afficher " Bonjour, monde " </h2>
            <?php
            /* Echo permet d'afficher des données sur une page*/
            echo "<p>Bonjour, monde !</p>";
            ?>
        </div>
        <div class='Box'>
            <h2 class='titre'>Question 2 : Variables et Opérateurs </h2>
            <h3>2.1 Declaration de la variable nom et âge + affectation d'une valeur</h3>
            <?php
            /*Declaration de la variable nom et âge + affectation d'une valeur*/

            $nom = "LONGCHY";
            $age = 24;

            echo "<p> Je me nomme $nom et j'ai $age ans";

            ?>
            <h3>2.2 Calcul de l'année de naissance en fonction de l'age</h3>
            <?php
            /*Declaration de la variable nom et âge + affectation d'une valeur*/

            $age = 24;

            /*Declaration de la variable année en cour */
            $currentyear = date('Y');

            /* Calcule de l'année de naissance */

            $birthyear = $currentyear - $age;

            echo "<p> Votre année de naissance si vous etes agé de $age est la suivante : $birthyear </p> ";

            ?>
        </div>

        <div class='Box'>
            <h2>Question 3 : Structures et Contrôle </h2>
            <h3> 3.1 Determiner la majorité d'un individu </h3>
            <?php

            $age = 26;

            if ($age >= 18) {
                echo '<p>Vous êtes majeur(e).</p>';
            } else {
                echo '<p>Vous êtes mineur(e).</p>';
            }

            ?>
            <h3> 3.2 Afficher les nombres de 1 à 10 avec la boucle For </h3>
            <?php

            $nombre = 1;

            for ($i = 1; $i <= 10; $i++) {
                echo "<p> $i </p>";
            }
            ?>

        </div>
        <div class='Box'>
            <h2>Question 4 : fonctions </h2>
            <h3> 4.1 Somme de deux nombres placés en parametre </h3>
            <?php

            function somme($nombre1, $nombre2)
            {
                return  $nombre1 + $nombre2;
            }
            somme(1, 3);
            echo "<p> la sommes entre 1 et 3 vaut " . somme(1, 3) . "</p>";
            ?>
            <h3> 4.2 Afficher d'un tableau à partir de PHP </h3>
            <?php
            function genererTableau($tableau)
            {
                echo "<table border='1'>";
                echo "<tr>";
                echo "<th>Nom</th>";
                echo "<th>Age</th>";
                echo "</tr>";
                foreach ($tableau as $personne) {
                    echo "<tr>";
                    echo "<td>" . $personne['nom'] . "</td><td>" . $personne['age'] . "</td>";
                    echo "</tr>";
                }
                echo "</table>";
            }
            $tableau = [
                ['nom' => 'Mariam', 'age' => 20],
                ['nom' => 'Emmanuel', 'age' => 24],
                ['nom' => 'Carelle', 'age' => 26],
                ['nom' => 'Josi', 'age' => 28],
                ['nom' => 'Ange', 'age' => 22]
            ];
            genererTableau($tableau);
            ?>
        </div>

        <div class='Box'>
            <h2> Question 5 : Manipulation de Fichiers </h2>
            <h3>Question 5.1 : Créer un fichier texte et y écrire un message</h3>
            <?php
            $fichier = fopen("message.txt", "w");
            fwrite($fichier, "Ceci est un message dans un fichier texte.");
            fclose($fichier);
            echo "<p>Fichier créé avec succès.</p>";
            ?>
            <h3>Question 5.2 : Lire et afficher le contenu du fichier</h3>
            <?php
            $contenu = file_get_contents("message.txt");
            echo $contenu;
            ?>
        </div>
    </section>
    <!-- Exercice 2 -->
    <section>
        <h2 style="color: black; text-align:center;">Exercice 2 : Tableau de notes </h2>
        <div class='Box'>
            <h3> * Afficher la note maximale, minimale et la moyenne</h3>
            <?php
            $notes = [12.25, 14.5, 15.75, 18, 10.5, 20];
            echo "<p>Note maximale : " . max($notes) . "</p>";
            echo "<p>Note minimale : " . min($notes) . "</p>";
            echo "<p>Moyenne : " . round(array_sum($notes) / count($notes), 2) . "</p>";
            ?>
        </div>

        <div class='Box'>
            <h3> * Trier le tableau par ordre décroissant </h3>
            <?php
            rsort($notes);
            print_r($notes);
            ?>
        </div>
    </section>
    <!-- Exercice 3-->
    <section>
        <h2 style="color: black; text-align:center;">Exercice 3 : Tableau de nombres </h2>
        <div class='Box'>
            <h3> * Afficher le tableau, la somme, la moyenne et le nombre de pairs</h3>
            <?php
            function afficherTableau($tableau)
            {
                foreach ($tableau as $element) {
                    echo $element . " ";
                }
            }

            function sommeTableau($tableau)
            {
                return array_sum($tableau);
            }

            function moyenneTableau($tableau)
            {
                return array_sum($tableau) / count($tableau);
            }

            function nombrePairs($tableau)
            {
                $count = 0;
                foreach ($tableau as $element) {
                    if ($element % 2 == 0) {
                        $count++;
                    }
                }
                return $count;
            }

            $nombres = [rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100)];

            echo "<p>Tableau : ";
            afficherTableau($nombres);
            echo "<br>Somme : " . sommeTableau($nombres);
            echo "<br>Moyenne : " . moyenneTableau($nombres);
            echo "<br>Nombre de pairs : " . nombrePairs($nombres);
            echo "</p>";
            ?>
        </div>
    </section>
    <!-- Exercice 4-->
    <section>
        <h2 style="color: black; text-align:center;">Exercice 4 : Tableau de noms complets </h2>
        <div class='Box'>
            <h3> * Afficher les noms complets, les noms en majuscules et les prénoms</h3>
            <?php
            function afficherNoms($noms)
            {
                foreach ($noms as $nom) {
                    echo "<p>" . $nom . "</p>";
                }
            }

            function nomEnMajuscules($nom)
            {
                return strtoupper($nom);
            }

            function prenomNom($nom)
            {
                return explode(" ", $nom);
            }

            $nomsComplets = ["Fred Khelyan", "Emmanuel Djakou", "Ange Tiomela", "Carelle Youmbi", "Paul Maeva"];

            echo "<p style='font-weight:bold; font-style:uppercase;'>Noms complets :</p>";
            afficherNoms($nomsComplets);

            echo "<p style='font-weight:bold; font-style:uppercase;'>Noms en majuscules :</p>";
            foreach ($nomsComplets as $nom) {
                echo "<p>" . nomEnMajuscules($nom) . "</p>";
            }

            echo "<p style='font-weight:bold; font-style:uppercase;'> Prénoms :</p>";
            foreach ($nomsComplets as $nom) {
                $prenom = prenomNom($nom)[0];
                echo "<p>" . $prenom . "<br></p>";
            }
            ?>
        </div>
    </section>
    <!-- Exercice 5-->
    <section>
        <h2 style="color: black; text-align:center;">Exercice 5 : Utilisation de formulaires en PHP </h2>
        <div class='Box'>
            <h3>Question 1 : Créer un formulaire avec méthode POST & TRAITEMENT</h3>
            <form method="POST" action="traitement.php">
                <div class="form-group">
                    <label for="nom">Nom</label>
                    <input type="text" id="nom" name="nom" placeholder="Entrez votre nom" required>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Entrez votre email" required>
                </div>

                <input type="submit" value="Soumettre">
            </form>
        </div>

        <div class='Box'>
            <h3>Question 4 : formulaire pour utiliser la méthode GET</h3>
            <form method="GET" action="traitement.php">
                <div class="form-group">
                    <label for="nom">Nom</label>
                    <input type="text" id="nom" name="nom" placeholder="Entrez votre nom" required>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Entrez votre email" required>
                </div>

                <input type="submit" value="Soumettre">
            </form>
        </div>
    </section>

</body>

</html>