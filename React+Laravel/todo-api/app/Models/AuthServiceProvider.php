<?php

namespace App\Providers;

use App\Models\Task;
use App\Policies\TaskPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Les politiques d'autorisation de l'application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Task::class => TaskPolicy::class, // Associer Task à TaskPolicy
    ];

    /**
     * Enregistrer les services d'authentification/autorisation.
     */
    public function boot()
    {
        $this->registerPolicies();
    }
}