import React from "react";
import { useAuth } from "../../contexts/auth";

export default function Login() {
  const { user, login } = useAuth();
  async function handleLogin() {
    await login();
  }

  return (
    <div>
      <h1>Login</h1>
      <span>Username: {user.userName}</span>
      <hr />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
