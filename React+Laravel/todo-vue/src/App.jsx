import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './PrivateRoute'; // Importation de la route privée

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route pour la page d'inscription */}
        <Route path="/register" element={<Register />} />

        {/* Route pour la page de connexion */}
        <Route path="/login" element={<Login />} />

        {/* Route protégée pour le tableau de bord */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Route par défaut pour rediriger vers la page de connexion */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}
