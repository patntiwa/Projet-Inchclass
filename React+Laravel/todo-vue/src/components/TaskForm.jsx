import React, { useState, useEffect } from 'react';

export default function TaskForm({ onSave, taskToEdit }) {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (taskToEdit) setTitle(taskToEdit.title);
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onSave({ ...taskToEdit, title });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Nouvelle tâche"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow"
        >
          {taskToEdit ? 'Modifier' : 'Ajouter'}
        </button>
      </div>
    </form>
  );
}