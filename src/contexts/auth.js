import React, { createContext, useState, useContext, useEffect } from "react";
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

  // Check if there is data in local storage
  useEffect(() => {
    const localStorageUserData = auth.getUserDataFromLocalStorage();
    if (
      localStorageUserData.token &&
      localStorageUserData.userName &&
      localStorageUserData.userId
    ) {
      setUser(localStorageUserData);
    }
  }, [setUser]);

  // Try login
  async function login() {
    const response = await auth.login();
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

  // Logout
  function logout() {
    auth.logout();
    setUser({
      userName: "",
      userId: "",
      token: "",
    });
  }

  return { user, login, logout };
}
