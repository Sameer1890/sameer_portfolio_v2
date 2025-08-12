import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  const navigate = useNavigate(); 

 
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("auth", "true");
  };

  
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("auth");
    navigate("/login"); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
