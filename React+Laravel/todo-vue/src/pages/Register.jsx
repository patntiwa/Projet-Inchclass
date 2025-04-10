import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', password_confirmation: '' });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/register', form);
      setNotification({ message: 'Inscription réussie ! Redirection...', type: 'success' });
      setTimeout(() => {
        navigate('/login');
      }, 3000); // redirection après 3s
    } catch (err) {
      setNotification({
        message: err.response?.data?.message || 'Erreur serveur',type:'error,'});
    }
  };

  // Efface automatiquement la notif au bout de 3 secondes
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-400 relative">
      {notification && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
          {notification.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Créer un compte</h2>
        {notification && (<p className="text-red-500 text-sm mb-4 text-center">{notification.message}</p>)}
        <input type="text" name="name" placeholder="Nom complet" onChange={handleChange} required className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="password" name="password_confirmation" placeholder="Confirmation mot de passe" onChange={handleChange} required className="w-full px-4 py-2 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">S'inscrire</button>
      </form>
    </div>
  );
}
