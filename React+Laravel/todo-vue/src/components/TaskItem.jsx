// /home/lpdev/Documents/Projet-Inchclass/React+Laravel/todo-vue/src/components/TaskItem.jsx
import React from 'react';

export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  return (
    // Ajout d'un effet de survol subtil et transition
    <div className="flex items-center justify-between bg-white rounded p-4 shadow mb-3 transition duration-150 ease-in-out hover:shadow-md">
      <div className="flex items-center space-x-4 flex-grow mr-4"> {/* Ajout de flex-grow et mr-4 pour mieux gérer l'espace */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          // Style de la checkbox amélioré pour la visibilité et l'alignement
          className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500 cursor-pointer"
        />
        {/* Ajout de 'break-words' pour gérer les longs titres */}
        <span className={`text-lg break-words ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {task.title}
        </span>
      </div>
      {/* Style des boutons amélioré */}
      <div className="flex-shrink-0 space-x-2"> {/* flex-shrink-0 pour éviter que les boutons ne se réduisent */}
        <button
          onClick={() => onEdit(task)}
          // Style bouton "Éditer"
          className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          Éditer
        </button>
        <button
          onClick={() => onDelete(task.id)}
          // Style bouton "Supprimer"
          className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
