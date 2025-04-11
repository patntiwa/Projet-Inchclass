import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import Popup from './Popup'; // Import du composant Popup

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null); // État pour gérer la tâche à supprimer

  const token = localStorage.getItem('token');

  const fetchTasks = async () => {
    const res = await axios.get('http://127.0.0.1:8000/api/tasks', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setTasks(res.data);
  };

  const saveTask = async (task) => {
    if (task.id) {
      await axios.put(`http://127.0.0.1:8000/api/tasks/${task.id}`, { title: task.title }, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } else {
      await axios.post('http://127.0.0.1:8000/api/tasks', { title: task.title }, {
        headers: { Authorization: `Bearer ${token}` }
      });
    }
    setEditTask(null);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchTasks();
  };

  const confirmDelete = () => {
    if (taskToDelete) {
      deleteTask(taskToDelete.id); // Supprime la tâche sélectionnée
      setTaskToDelete(null); // Réinitialise l'état
    }
  };

  const cancelDelete = () => {
    setTaskToDelete(null); // Annule la suppression
  };

  const toggleTask = async (id) => {
    await axios.patch(`http://127.0.0.1:8000/api/tasks/${id}/toggle`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="py-4">
    <TaskForm onSave={saveTask} taskToEdit={editTask} onCancelEdit={() => setEditTask(null)} /> {/* Ajout de onCancelEdit ici aussi */}

    {/* Ajout d'un espacement au-dessus de la liste des tâches */}
    <div className="mt-6">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={toggleTask}
          onEdit={setEditTask}
          onDelete={() => setTaskToDelete(task)}
        />
      ))}
    </div>

    {taskToDelete && (
      <Popup
        message={`Voulez-vous vraiment supprimer la tâche "${taskToDelete.title}" ?`} // Message plus spécifique
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    )}
  </div>
  );
}