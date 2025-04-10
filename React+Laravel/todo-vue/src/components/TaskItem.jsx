import React from 'react';


export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-white rounded p-4 shadow mb-3">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 text-green-600"
        />
        <span className={`text-lg ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>{task.title}</span>
      </div>
      <div className="space-x-2">
        <button onClick={() => onEdit(task)} className="text-blue-600 hover:underline">Éditer</button>
        <button onClick={() => onDelete(task.id)} className="text-red-500 hover:underline">Supprimer</button>
      </div>
    </div>
  );
}