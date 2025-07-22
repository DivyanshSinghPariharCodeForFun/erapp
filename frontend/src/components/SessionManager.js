import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const SessionManager = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const intervalRef = useRef();

  useEffect(() => {
    if (!isAuthenticated) return;

    const checkSession = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token');
        await axios.get(`${process.env.REACT_APP_API_URL}/session-time-left`, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } catch (err) {
        // If session is invalid/expired, log out and redirect
        logout();
        navigate('/logout');
      }
    };

    // Check session every 60 seconds
    intervalRef.current = setInterval(checkSession, 60000);

    // Also check immediately on mount
    checkSession();

    return () => clearInterval(intervalRef.current);
  }, [isAuthenticated, logout, navigate]);

  return null;
};

export default SessionManager; 