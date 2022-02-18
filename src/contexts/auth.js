import React, { createContext } from "react";

export const AuthContext = createContext({});

const value = {
  signed: true,
};

export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
