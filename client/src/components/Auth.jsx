import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
        try {
            const decoded = jwtDecode(token);
            if (decoded.exp * 1000 > Date.now()) {
                setIsLoggedIn(true);
                setUserData(decoded);
              } else {
                localStorage.removeItem('authToken'); 
              }
            } catch (error) {
                console.error('Invalid token:', error);
                localStorage.removeItem('authToken');
        }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    const decoded = jwtDecode(token);
    setIsLoggedIn(true);
    setUserData(decoded);
    navigate("/");
  };

  const logout = async () => {
      localStorage.removeItem('authToken');
      setIsLoggedIn(false);
      setUserData(null);
      navigate('/');
  };

  return (
    <AuthContext.Provider value={{
        isLoggedIn,
        userData,
        login,
        logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};