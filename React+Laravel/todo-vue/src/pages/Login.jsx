import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', form);
      localStorage.setItem('token', response.data.token);
      setNotification({ message: 'Connexion réussie ! Redirection...', type: 'success' });

      setTimeout(() => {
        setNotification(null);
        navigate('/dashboard');
      }, 3000);
    } catch (err) {
      setNotification({
        message: err.response?.data?.message || 'Identifiants invalides',
        type: 'error',
      });
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const color = notification?.type === 'error' ? 'bg-red-500' : 'bg-green-500';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 to-indigo-400 relative">
      {notification && (
        <div className={`absolute top-4 right-4 text-white px-4 py-2 rounded shadow ${color}`}>
          {notification.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Connexion</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded">
          Se connecter
        </button>
      </form>
    </div>
  );
}
