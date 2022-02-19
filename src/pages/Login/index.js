import React from "react";
import { connect } from "react-redux";

const Login = ({ user }) => {
  console.log("estado", user, user.name);

  return (
    <div>
      <h1>Login</h1>
      <hr />
    </div>
  );
};

function mapStateToProps(state) {
  return { user: state.user, modules: state.modules };
}

export default connect(mapStateToProps)(Login);
