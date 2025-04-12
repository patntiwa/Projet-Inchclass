import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'; 

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [notification, setNotification] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null); // Efface la notification précédente
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Connexion</h2>

        {notification && (
          <div className={`mb-4 p-3 rounded-md text-center text-sm ${notification.type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            {notification.message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Votre adresse email"
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="relative">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Mot de passe</label>
        </div>  

        <div className="mb-6 relative flex  items-center">  
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Votre mot de passe"
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none"
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="h-5 w-5" />
          </button>
        </div>

        <button
          type="submit"
          className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
          ) : (
            'Se connecter'
          )}
        </button>

        <p className="mt-4 text-center text-gray-600 text-sm">
          Pas de compte ? <Link to="/register" className="text-indigo-600 hover:text-indigo-800 font-bold">S'inscrire</Link>
        </p>
        </form>
      </div>
    </div>
  );
}