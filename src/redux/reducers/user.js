const initialState = {
  user: {
    name: "",
    id: "",
    token: "",
  },
};

export default function userReducer(state = initialState, action) {
  return {
    state,
  };
}
