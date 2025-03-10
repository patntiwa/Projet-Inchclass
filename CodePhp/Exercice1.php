<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nombres Aléatoires</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 min-h-screen py-8">
    <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">Générateur de Nombres Aléatoires</h1>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Premier tableau: Nombres aléatoires -->
            <div class="bg-white rounded-lg shadow-lg p-6">
                <h2 class="text-xl font-semibold mb-4 text-center text-gray-700">Nombres Aléatoires</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full border-collapse">
                        <thead>
                            <tr class="bg-gray-50">
                                <th class="border p-2 text-gray-600">Position</th>
                                <th class="border p-2 text-gray-600">Valeur</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $nombre = array();
                            for ($i = 1; $i <= 50; $i++) {
                                $nombre[] = rand(1, 100);
                                echo "<tr class='hover:bg-gray-50'>";
                                echo "<td class='border p-2 text-center'>$i</td>";
                                echo "<td class='border p-2 text-center'>{$nombre[$i - 1]}</td>";
                                echo "</tr>";
                            }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Deuxième tableau: Élément spécifique -->
            <div class="bg-white rounded-lg shadow-lg p-6">
                <h2 class="text-xl font-semibold mb-4 text-center text-gray-700">Élément Spécifique</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full border-collapse">
                        <thead>
                            <tr class="bg-gray-50">
                                <th class="border p-2 text-gray-600">Position</th>
                                <th class="border p-2 text-gray-600">Valeur</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php if (isset($nombre[4])): ?>
                                <tr class="hover:bg-gray-50">
                                    <td class="border p-2 text-center">5</td>
                                    <td class="border p-2 text-center"><?php echo $nombre[4]; ?></td>
                                </tr>
                                <tr>
                                    <td class="border p-2 text-center">Taille Tableau </td>
                                    <td class="border p-2 text-center"><?php echo count($nombre) ?></td>
                                </tr>
                            <?php endif; ?>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Troisième tableau: Nombres triés -->
            <div class="bg-white rounded-lg shadow-lg p-6">
                <h2 class="text-xl font-semibold mb-4 text-center text-gray-700">Nombres Triés</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full border-collapse">
                        <thead>
                            <tr class="bg-gray-50">
                                <th class="border p-2 text-gray-600">Position</th>
                                <th class="border p-2 text-gray-600">Valeur</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $nombresTries = $nombre;
                            sort($nombresTries);
                            foreach ($nombresTries as $key => $valeur):
                            ?>
                                <tr class="hover:bg-gray-50">
                                    <td class="border p-2 text-center"><?php echo $key; ?></td>
                                    <td class="border p-2 text-center"><?php echo $valeur; ?></td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
