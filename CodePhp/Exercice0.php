<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vérification de Majorité</title>
    <!-- Intégration de Tailwind CSS via CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 flex items-center justify-center h-screen">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 class="text-2xl font-bold mb-6 text-center">Vérification de Majorité</h1>

        <?php
        // Traitement du formulaire
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $age = isset($_POST['age']) ? (int)$_POST['age'] : 0;

            if ($age >= 18) {
                echo '<p class="text-green-600 text-center">Vous êtes majeur(e).</p>';
            } else {
                echo '<p class="text-red-600 text-center">Vous êtes mineur(e).</p>';
            }
        }
        ?>

        <!-- Formulaire de saisie -->
        <form method="POST" action="" class="space-y-4">
            <div>
                <label for="age" class="block text-sm font-medium text-gray-700">Votre âge :</label>
                <input type="number" id="age" min="0" name="age" value="<?php echo $_POST['age'] ?>" required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Vérifier
            </button>
        </form>
    </div>
    
</body>

</html>
