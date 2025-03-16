<?php require_once 'views/templates/header.php'; ?>

<div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-lg shadow-md p-6">
        <h1 class="text-3xl font-bold mb-6">Bienvenue sur notre site</h1>

        <?php if (isset($isLoggedIn) && $isLoggedIn): ?>
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                <p>Bonjour <?php echo htmlspecialchars($username); ?> !</p>
            </div>
        <?php else: ?>
            <p class="mb-4">
                Veuillez vous connecter ou créer un compte pour accéder à toutes les fonctionnalités.
            </p>
            <div class="flex space-x-4">
                <a href="/login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Se connecter
                </a>
                <a href="/register" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    S'inscrire
                </a>
            </div>
        <?php endif; ?>
    </div>
</div>

<?php require_once 'views/templates/footer.php'; ?>