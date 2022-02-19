const initialState = {
  userName: "",
  userId: "",
  token: "",
  isSignedIn: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_USER_NAME":
      return { ...state, name: action.payload };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        userName: action.payload.userName,
        userId: action.payload.userId,
        token: action.payload.token,
        isSignedIn: true,
      };
    default:
      return state;
  }
}
