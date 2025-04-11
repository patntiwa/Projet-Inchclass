import React, { useState, useEffect } from 'react';

export default function TaskForm({ onSave, taskToEdit, onCancelEdit }) {
  // Initialisation de l'état local pour le titre et la description
  // Si taskToEdit existe, on pré-remplit les champs, sinon on initialise à vide
  const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');
  // Note: La description n'est pas utilisée dans saveTask pour l'instant, mais on la garde ici
  // Removed unused description state

  // Met à jour les champs si taskToEdit change (quand on clique sur "Éditer")
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      // Removed unused description state update
    } else {
      // Si on annule l'édition ou si c'est un nouveau formulaire, on vide
      setTitle('');
      // Removed unused description state reset
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // On crée l'objet tâche à sauvegarder
    // Si taskToEdit existe, on inclut son id pour la mise à jour
    const taskData = {
      id: taskToEdit ? taskToEdit.id : undefined,
      title: title,
      // Tu pourras ajouter la description ici si ton API la gère
      // description: description,
    };
    onSave(taskData);
    // Réinitialise les champs après sauvegarde
    setTitle('');
    setDescription('');
    // Si on était en mode édition, on appelle onCancelEdit pour sortir de ce mode
    if (onCancelEdit) onCancelEdit();
  };

  const handleCancel = () => {
    // Appelle la fonction onCancelEdit fournie par TaskList pour réinitialiser editTask à null
    if (onCancelEdit) {
      onCancelEdit();
    }
    // Réinitialise aussi les champs locaux au cas où
    setTitle('');
    setDescription('');
  };


  return (
    // Ajout de styles au formulaire : espacement, fond, ombre, etc.
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow-md mb-6">
      <div className="mb-4">
        <label htmlFor="task-title" className="block text-sm font-medium text-gray-700 mb-1">
          Titre de la tâche
        </label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Que faut-il faire ?"
          required
          // Styles pour le champ de saisie
          className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Champ Description (optionnel, si tu l'utilises) */}
      {/*
      <div className="mb-4">
        <label htmlFor="task-description" className="block text-sm font-medium text-gray-700 mb-1">
          Description (optionnel)
        </label>
        <textarea
          id="task-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ajouter plus de détails..."
          rows="3"
          // Styles pour le textarea
          className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      */}

      {/* Conteneur pour les boutons avec espacement */}
      <div className="flex items-center justify-end space-x-3">
        {/* Bouton Annuler (visible seulement en mode édition) */}
        {taskToEdit && (
          <button
            type="button"
            onClick={handleCancel} // Utilise handleCancel maintenant
            // Styles pour le bouton Annuler
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Annuler
          </button>
        )}
        {/* Bouton Ajouter/Modifier */}
        <button
          type="submit"
          // Styles pour le bouton principal (Ajouter/Modifier)
          className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          {taskToEdit ? 'Modifier la tâche' : 'Ajouter la tâche'}
        </button>
      </div>
    </form>
  );
}