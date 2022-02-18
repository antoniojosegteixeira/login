import React, { createContext, useState, useContext } from "react";
import * as auth from "../services/auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    userName: "",
    userId: "",
    token: "",
    isSigned: false,
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  const { user, setUser } = context;

  function login() {
    const response = auth.login();
    setUser({
      userName: response.userName,
      userId: response.userId,
      token: response.token,
      isSigned: true,
    });

    auth.addUserDataToLocalStorage(
      response.userName,
      response.userId,
      response.token
    );
  }

  return { user, login };
}
