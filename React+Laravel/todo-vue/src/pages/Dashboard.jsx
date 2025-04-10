import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState(null); // État pour stocker les informations utilisateur
  const [loading, setLoading] = useState(true); // État pour gérer le chargement
  const navigate = useNavigate();

  useEffect(() => {
    // Récupération des informations utilisateur via l'API
    axios
      .get('http://127.0.0.1:8000/api/user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          Accept: 'application/json',
        },
      })
      .then((res) => {
        setUser(res.data); // Stocker les données utilisateur
        setLoading(false); // Arrêter le chargement
      })
      .catch(() => {
        setUser(null); // Réinitialiser l'utilisateur en cas d'erreur
        setLoading(false); // Arrêter le chargement
        navigate('/login'); // Rediriger vers la page de connexion si non authentifié
      });
  }, [navigate]);

  const handleLogout = () => {
    // Supprimer le token et rediriger vers la page de connexion
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) {
    // Afficher un indicateur de chargement pendant la récupération des données
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-bold">Chargement...</p>
      </div>
    );
  }

  if (!user) {
    // Si l'utilisateur n'est pas défini, rediriger vers la page de connexion
    return null;
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Tableau de bord</h2>
        {user && <p className="mb-4">👤 {user.name}</p>}
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 hover:bg-red-600 px-4 py-2 rounded w-full text-white"
        >
          Déconnexion
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Bienvenue {user?.name}</h1>
        <TaskList />
      </main>
    </div>
  );
}