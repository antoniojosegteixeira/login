export function login(email, password) {
  return {
    userName: "João",
    userId: "21841",
    token: "xdccsd95458dauh2178gjaiozh8y7gq782",
  };
}

export function addUserDataToLocalStorage(userName, userId, token) {
  localStorage.setItem("userName", userName);
  localStorage.setItem("userId", userId);
  localStorage.setItem("token", token);
}
