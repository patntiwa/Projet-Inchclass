
import React, { useEffect } from 'react';

export default function Notification({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // disparaît après 3 secondes
    return () => clearTimeout(timer);
  }, [onClose]);

  const color = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`fixed top-4 right-4 text-white px-4 py-2 rounded shadow ${color}`}>
      {message}
    </div>
  );
}
