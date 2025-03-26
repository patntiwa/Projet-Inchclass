<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Système d'authentification MVC</title>
    <!-- Intégration de Tailwind CSS via CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 min-h-screen flex flex-col">
    <header class="bg-blue-600 text-white shadow-md">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" class="text-xl font-bold">MVC Auth</a>
            <nav>
                <ul class="flex space-x-4">
                    <li><a href="/" class="hover:underline">Accueil</a></li>
                    <?php
                    if (!isset($isLoggedIn)) {
                        $isLoggedIn = false;
                    }
                    if ($isLoggedIn): ?>
                        <li><a href="/logout" class="hover:underline">Déconnexion</a></li>
                    <?php else: ?>
                        <li><a href="/login" class="hover:underline">Connexion</a></li>
                        <li><a href="/register" class="hover:underline">Inscription</a></li>
                    <?php endif; ?>
                </ul>
            </nav>
        </div>
    </header>

    <main class="container mx-auto px-4 py-8 flex-grow">