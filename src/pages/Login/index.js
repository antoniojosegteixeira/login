import React from "react";
import { connect } from "react-redux";
import { changeUserName, login } from "../../redux/actions";

const Login = ({ user, dispatch }) => {
  return (
    <div>
      <h1>Login</h1>
      <hr />
      <span>{user.name}</span>
      <hr />
      <button onClick={() => dispatch(login())}>Change Name</button>
    </div>
  );
};

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Login);
