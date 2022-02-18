import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export default function Login() {
  const state = useContext(AuthContext);
  function handleLogin() {
    console.log(state);
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
