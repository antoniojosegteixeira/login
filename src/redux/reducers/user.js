const initialState = {
  name: "João",
  id: "",
  token: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_USER_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
