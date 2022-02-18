import React, { useContext } from "react";
import Routes from "./routes";
import { AuthProvider, AuthContext } from "./contexts/auth";

function App() {
  const state = useContext(AuthContext);

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
