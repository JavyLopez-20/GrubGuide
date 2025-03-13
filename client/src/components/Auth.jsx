import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 1. Add token state for proper auth persistence
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  // 2. Initialize state from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
        try {
            const decoded = jwtDecode(token);
            if (decoded.exp * 1000 > Date.now()) {
                setIsLoggedIn(true);
                setUserData(decoded);
              } else {
                localStorage.removeItem('token'); // Remove expired token
              }
            } catch (error) {
                console.error('Invalid token:', error);
                localStorage.removeItem('token'); // Remove invalid token
        }
    }
  }, []);

  // 3. Add login/logout functions
  const login = (token) => {
    localStorage.setItem('authToken', token);
    const decoded = jwtDecode(token);
    setIsLoggedIn(true);
    setUserData(decoded);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    const decoded = removeItem('authToken');
    setIsLoggedIn(false);
    setUserData(null);
  };

  // 4. Provide full auth API to components
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