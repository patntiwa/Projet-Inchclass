<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class TaskController extends Controller
{
    use AuthorizesRequests;
    
    /**
     * Afficher toutes les tâches de l'utilisateur authentifié.
     */
    public function index(Request $request)
    {
        // Retourner les tâches associées à l'utilisateur connecté
        return response()->json($request->user()->tasks, 200);
    }

    /**
     * Créer une nouvelle tâche pour l'utilisateur authentifié.
     */
    public function store(Request $request)
    {
        // Valider les données de la requête
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'completed' => 'boolean',
        ]);

        // Créer une nouvelle tâche pour l'utilisateur connecté
        $task = $request->user()->tasks()->create($validatedData);

        return response()->json($task, 201);
    }

    /**
     * Mettre à jour une tâche existante.
     */
    public function update(Request $request, Task $task)
    {
        // Vérifier si l'utilisateur est autorisé à mettre à jour cette tâche
        $this->authorize('update', $task);

        // Valider les données de la requête
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'completed' => 'boolean',
        ]);

        // Mettre à jour la tâche
        $task->update($validatedData);

        return response()->json($task, 200);
    }

    /**
     * Supprimer une tâche existante.
     */
    public function destroy(Task $task)
    {
        // Vérifier si l'utilisateur est autorisé à supprimer cette tâche
        $this->authorize('delete', $task);

        // Supprimer la tâche
        $task->delete();

        return response()->noContent();
    }

    /**
     * Basculer l'état de complétion d'une tâche.
     */
    public function toggle(Task $task)
    {
        // Vérifier si l'utilisateur est autorisé à mettre à jour cette tâche
        $this->authorize('update', $task);

        // Basculer l'état de complétion
        $task->update(['completed' => !$task->completed]);

        return response()->json($task, 200);
    }

    /**
     * Afficher une tâche spécifique.
     */
    public function show(Task $task)
    {
        // Vérifier si l'utilisateur est autorisé à voir cette tâche
        $this->authorize('view', $task);

        return response()->json($task, 200);
    }
}
