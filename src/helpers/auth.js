import axios from "axios";
import { clearProfile, setToken } from "../store/profileSlice";
import store from "../store/store";
import { backendApi } from "./host";
export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("token")) return localStorage.getItem("token");
  return false;
};

export const getCurrentUsername = () => {
  if (typeof window === "undefined") return false;
  if (localStorage.getItem("token") && localStorage.getItem("username"))
    return localStorage.getItem("username");
  return false;
};

export const authenticate = (token, next) => {
  store.dispatch(setToken(token));
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
    next();
  }
};

export const logout = (next = () => {}) => {
  store.dispatch(clearProfile());
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    next();
  }
};

export const login = async (username, password) => {
  return axios
    .post(`${backendApi}/auth/login`, {
      username,
      password,
    })
    .then((res) => {
      if (typeof window !== "undefined")
        localStorage.setItem("username", username);
      return res.data;
    })
    .catch((res) => {
      return res?.response?.data || { success: false, message: res.message };
    });
};

export const signup = (fullname, username, email, password) => {
  return axios
    .post(`${backendApi}/auth/signup`, {
      fullname,
      username,
      email,
      password,
    })
    .then((res) => res.data)
    .catch((res) => {
      return res?.response?.data || { success: false, message: res.message };
    });
};
