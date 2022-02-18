import React from "react";
import { useAuth } from "../../contexts/auth";

export default function Login() {
  const { user, setUser } = useAuth();
  function handleLogin() {
    console.log(user);
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
