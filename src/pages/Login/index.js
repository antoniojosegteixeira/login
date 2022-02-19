import React from "react";
import { useAuth } from "../../contexts/auth";
import { connect } from "react-redux";

const Login = ({ state }) => {
  const { user, login, logout } = useAuth();
  async function handleLogin() {
    await login();
  }

  function handleLogout() {
    logout();
  }

  console.log(state);

  return (
    <div>
      <h1>Login</h1>
      <span>Username: {user.userName}</span>
      <hr />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default connect((state) => state)(Login);
