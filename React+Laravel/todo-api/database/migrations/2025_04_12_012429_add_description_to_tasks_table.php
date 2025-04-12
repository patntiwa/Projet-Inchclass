<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('tasks', function (Blueprint $table) {
            // Ajouter la colonne description après la colonne title
            // La méthode after permet de positionner la colonne dans l'ordre souhaité
            // nullable() indique que la colonne peut accepter des valeurs NULL
            $table->text('description')->nullable()->after('title');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tasks', function (Blueprint $table) {
            // Supprimer la colonne en cas de rollback
            $table->dropColumn('description');
        });
    }
};
