import axios from "axios";
export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("token")) return localStorage.getItem("token");
  return false;
};

export const authenticate = (token, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
    next();
  }
};

export const login = async (username, password) => {
  return axios
    .post("http://0.0.0.0:8000/auth/login", {
      username,
      password,
    })
    .then((res) => res.data)
    .catch((res) => {
      return res?.response?.data || { success: false, message: res.message };
    });
};

export const signup = (fullname, username, email, password) => {
  return axios
    .post("http://0.0.0.0:8000/auth/signup", {
      fullname,
      username,
      email,
      password,
    })
    .then((res) => res.data)
    .catch((res) => {
      console.log(res);
      return res?.response?.data || { success: false, message: res.message };
    });
};
