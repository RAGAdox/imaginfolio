export const login = (username, password) => {
  console.log(username, password);
  return fetch("http://192.168.0.10:8000/auth/login", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password }),
  })
    .then((res) => res.json())
    .catch((err) => {
      return {
        success: false,
        message: err,
      };
    });
};
export const authenticate = (token, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
    next();
  }
};
export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("token")) return localStorage.getItem("token");
  return false;
};
