import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 1. Add token state for proper auth persistence
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    token: null
  });

  // 2. Initialize state from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthState({
        isLoggedIn: true,
        token: token
      });
    }
  }, []);

  // 3. Add login/logout functions
  const login = (token) => {
    localStorage.setItem('authToken', token);
    setAuthState({
      isLoggedIn: true,
      token: token
    });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthState({
      isLoggedIn: false,
      token: null
    });
  };

  // 4. Provide full auth API to components
  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};