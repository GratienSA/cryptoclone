import React from 'react';
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('role');
    
    router.push('/');
  };

  return (
    <button onClick={handleLogout}>
      Déconnexion
    </button>
  );
};

export default Logout;