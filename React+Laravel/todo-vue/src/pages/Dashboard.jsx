import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const navigate = useNavigate();

  // Récupération des informations utilisateur
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://127.0.0.1:8000/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
      setUser(null);
      setNotification({
        type: 'error',
        message: "Échec de la récupération de l'utilisateur.",
      });
      navigate('/login');
    }
  };
  
  // Récupération des tâches de l'utilisateur
  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://127.0.0.1:8000/api/tasks', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des tâches:", error);
      setNotification({
        type: 'error',
        message: "Impossible de charger les tâches.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Ajouter une nouvelle tâche
  const addTask = async () => {
    if (!newTaskTitle.trim()) {
      setNotification({
        type: 'error',
        message: "Le titre de la tâche ne peut pas être vide.",
      });
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://127.0.0.1:8000/api/tasks',
        {
          title: newTaskTitle,
          description: newTaskDescription,
          completed: false // Par défaut en cours
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNewTaskTitle('');
      setNewTaskDescription('');
      fetchTasks(); // Rafraîchir la liste des tâches
      setNotification({
        type: 'success',
        message: "Tâche ajoutée avec succès.",
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout de la tâche:", error);
      setNotification({
        type: 'error',
        message: "Impossible d'ajouter la tâche.",
      });
    }
  };

  // Mettre à jour le statut d'une tâche
  const updateTaskStatus = async (taskId, completed) => {
    try {
      const token = localStorage.getItem('token');
      const taskToUpdate = tasks.find(task => task.id === taskId);
      
      await axios.put(
        `http://127.0.0.1:8000/api/tasks/${taskId}`,
        {
          ...taskToUpdate,
          completed: completed
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      fetchTasks();
      setNotification({
        type: 'success',
        message: `Tâche marquée comme ${completed ? 'terminée' : 'en cours'}.`,
      });
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut:", error);
      setNotification({
        type: 'error',
        message: "Impossible de mettre à jour le statut de la tâche.",
      });
    }
  };

  // Supprimer une tâche
  const deleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://127.0.0.1:8000/api/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      fetchTasks();
      setNotification({
        type: 'success',
        message: "Tâche supprimée avec succès.",
      });
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      setNotification({
        type: 'error',
        message: "Impossible de supprimer la tâche.",
      });
    }
  };

  // Ouvrir le formulaire d'édition
  const startEditing = (task) => {
    setEditingTask({
      id: task.id,
      title: task.title,
      description: task.description,
      completed: task.completed
    });
  };

  // Mettre à jour une tâche
  const updateTask = async () => {
    if (!editingTask.title.trim()) {
      setNotification({
        type: 'error',
        message: "Le titre de la tâche ne peut pas être vide.",
      });
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://127.0.0.1:8000/api/tasks/${editingTask.id}`,
        editingTask,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      setEditingTask(null);
      fetchTasks();
      setNotification({
        type: 'success',
        message: "Tâche mise à jour avec succès.",
      });
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
      setNotification({
        type: 'error',
        message: "Impossible de mettre à jour la tâche.",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    fetchTasks();
    fetchUser();
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const inProgressTasks = tasks.filter(task => !task.completed).length;

  const notificationColor =
    notification?.type === 'error' ? 'bg-red-500' : 'bg-green-500';

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 flex flex-col justify-between">
        <div>
          <div className="p-4">
            <h1 className="text-xl font-bold">Mon Dashboard</h1>
          </div>
          <nav className="mt-4">
            <Link to="/dashboard" className="block px-6 py-3 hover:bg-gray-700 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>Tableau de bord</span>
            </Link>
            <Link to="/profile" className="block px-6 py-3 hover:bg-gray-700 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-gray-500"></span>
              <span>Réglage du profil</span>
            </Link>
          </nav>
        </div>
        <div className="bg-red-600 text-center p-4">
          <button onClick={handleLogout} className="text-white font-semibold">Déconnexion</button>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="flex-1 p-6 relative overflow-y-auto">
        {notification && (
          <div className={`fixed top-4 right-4 text-white px-4 py-2 rounded shadow ${notificationColor} z-50`}>
            {notification.message}
          </div>
        )}

        <h1 className="text-3xl font-bold mb-2">Tableau de Bord</h1>
        <h1 className="text-xl font-semibold mb-6">Bienvenue {user?.name}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="text-sm text-gray-500 font-semibold">TÂCHES TOTALES</p>
            <p className="text-3xl font-bold mt-2">{totalTasks}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="text-sm text-gray-500 font-semibold">TÂCHES COMPLÉTÉES</p>
            <p className="text-3xl font-bold text-green-600 mt-2">{completedTasks}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="text-sm text-gray-500 font-semibold">TÂCHES EN COURS</p>
            <p className="text-3xl font-bold text-yellow-600 mt-2">{inProgressTasks}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Ajouter une tâche</h2>
          <div className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Titre de la tâche"
              className="border rounded p-2"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
            <textarea
              placeholder="Description de la tâche"
              className="border rounded p-2"
              rows="3"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
            ></textarea>
            <button 
              onClick={addTask}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded self-start"
            >
              Ajouter
            </button>
          </div>
        </div>

        {/* Modal d'édition */}
        {editingTask && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Modifier la tâche</h2>
              <div className="flex flex-col space-y-3">
                <input
                  type="text"
                  className="border rounded p-2"
                  value={editingTask.title}
                  onChange={(e) => setEditingTask({...editingTask, title: e.target.value})}
                />
                <textarea
                  className="border rounded p-2"
                  rows="3"
                  value={editingTask.description}
                  onChange={(e) => setEditingTask({...editingTask, description: e.target.value})}
                ></textarea>
                <div className="flex items-center space-x-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={editingTask.completed}
                      onChange={(e) => setEditingTask({...editingTask, completed: e.target.checked})}
                    />
                    Tâche complétée
                  </label>
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <button 
                    onClick={() => setEditingTask(null)}
                    className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                  >
                    Annuler
                  </button>
                  <button 
                    onClick={updateTask}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                  >
                    Enregistrer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Liste des Tâches</h2>
          {loading ? (
            <p className="text-gray-500">Chargement des tâches...</p>
          ) : tasks.length === 0 ? (
            <p className="text-gray-500">Aucune tâche disponible.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left">Titre</th>
                    <th className="py-2 px-4 text-left">Statut</th>
                    <th className="py-2 px-4 text-left">Description</th>
                    <th className="py-2 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map(task => (
                    <tr key={task.id} className="border-b">
                      <td className="py-2 px-4 font-medium">{task.title}</td>
                      <td className="py-2 px-4">
                        <span 
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            task.completed 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                          onClick={() => updateTaskStatus(task.id, !task.completed)}
                          style={{cursor: 'pointer'}}
                        >
                          {task.completed ? "Terminée" : "En cours"}
                        </span>
                      </td>
                      <td className="py-2 px-4">{task.description}</td>
                      <td className="py-2 px-4 text-right">
                        <button 
                          onClick={() => startEditing(task)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                        >
                          Modifier
                        </button>
                        <button 
                          onClick={() => deleteTask(task.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
