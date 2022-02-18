export async function login(email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3",
        userName: "Thiago",
        userId: "588501",
      });
    }, 2000);
  });
}

export function addUserDataToLocalStorage(userName, userId, token) {
  localStorage.setItem("userName", userName);
  localStorage.setItem("userId", userId);
  localStorage.setItem("token", token);
}

export function getUserDataFromLocalStorage() {
  return {
    userName: localStorage.getItem("userName"),
    userId: localStorage.getItem("userId"),
    token: localStorage.getItem("token"),
  };
}
