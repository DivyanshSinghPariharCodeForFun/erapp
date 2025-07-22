import React from 'react';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const NoAccess = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ color: '#c0392b', fontSize: '2rem', marginBottom: '1rem' }}>You Don't Have Access</h2>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>You are not authorized to view this page.<br/>If you believe this is a mistake, please contact IT support.</p>
      <button
        onClick={handleLogout}
        style={{
          marginTop: '24px',
          padding: '10px 30px',
          background: '#167340',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '18px',
          cursor: 'pointer'
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default NoAccess;