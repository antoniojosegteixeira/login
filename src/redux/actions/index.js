import * as auth from "../../services/auth";

export const changeUserName = (payload) => {
  return {
    type: "CHANGE_USER_NAME",
    payload: payload,
  };
};

// Login function
export const login = () => async (dispatch) => {
  const response = await auth.login();
  dispatch({ type: "LOGIN_SUCCESS", payload: response });
};
