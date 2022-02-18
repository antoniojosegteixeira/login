import React from "react";
import Routes from "./routes";
import { AuthProvider } from "./contexts/auth";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  );
}

export default App;
