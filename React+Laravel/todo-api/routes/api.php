<?php

use Illuminate\Http\Request;
use Illuminate\support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;


//Routes

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);

    Route::get('/tasks', [TaskController::class, 'index']); // Récupérer toutes les tâches
    Route::post('/tasks', [TaskController::class, 'store']); // Créer une nouvelle tâche
    Route::put('/tasks/{task}', [TaskController::class, 'update']); // Mettre à jour une tâche
    Route::delete('/tasks/{task}', [TaskController::class, 'destroy']); // Supprimer une tâche
    Route::patch('/tasks/{task}/toggle', [TaskController::class, 'toggle']); // Basculer l'état de complétion
});

    
