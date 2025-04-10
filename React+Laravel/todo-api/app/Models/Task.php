<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    // Attributs modifiables en masse
    protected $fillable = ['title', 'completed', 'user_id'];

    /**
     * Relation : une tâche appartient à un utilisateur.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}