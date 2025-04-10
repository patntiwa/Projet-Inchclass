<?php

namespace App\Policies;

use App\Models\Task;
use App\Models\User;

class TaskPolicy
{
    /**
     * Déterminer si l'utilisateur peut voir une tâche.
     */
    public function view(User $user, Task $task)
    {
        // Autoriser uniquement si la tâche appartient à l'utilisateur
        return $user->id === $task->user_id;
    }

    /**
     * Déterminer si l'utilisateur peut mettre à jour une tâche.
     */
    public function update(User $user, Task $task)
    {
        // Autoriser uniquement si la tâche appartient à l'utilisateur
        return $user->id === $task->user_id;
    }

    /**
     * Déterminer si l'utilisateur peut supprimer une tâche.
     */
    public function delete(User $user, Task $task)
    {
        // Autoriser uniquement si la tâche appartient à l'utilisateur
        return $user->id === $task->user_id;
    }

    /**
     * Déterminer si l'utilisateur peut voir toutes les tâches.
     */
    public function viewAny(User $user)
    {
        // Autoriser tous les utilisateurs connectés à voir leurs propres tâches
        return true;
    }
}