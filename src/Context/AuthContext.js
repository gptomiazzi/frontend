import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || null);

  const updateToken = (newToken) => {
    console.log('Updating token:', newToken);
    setToken(newToken);
    sessionStorage.setItem('token', newToken);
  };

  useEffect(() => {
    console.log('Current token:', token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};