import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

function getStoredAuth() {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  return {
    token: token || "",
    user: storedUser ? JSON.parse(storedUser) : null,
  };
}

function AuthProvider({ children }) {
  const [authState, setAuthState] = useState(getStoredAuth);

  const login = (data) => {
    const nextState = {
      token: data.token || "",
      user: data.user || null,
    };

    localStorage.setItem("token", nextState.token);
    localStorage.setItem("user", JSON.stringify(nextState.user));
    setAuthState(nextState);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthState({
      token: "",
      user: null,
    });
  };

  const value = {
    user: authState.user,
    token: authState.token,
    isAuthenticated: Boolean(authState.token),
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
}

export { AuthProvider, useAuth };
