// 📁 src/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  // Récupération du token depuis le localStorage
  const token = localStorage.getItem('token');

  // Si aucun token n'est trouvé, rediriger vers la page de connexion
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Si un token est présent, afficher les enfants (composants protégés)
  return children;
}
