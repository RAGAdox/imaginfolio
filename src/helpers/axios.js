import Axios from "axios";
import { backendApi } from "./host";
import { isAuthenticated } from "./auth";
const axios = Axios.create({
  baseURL: backendApi,
  timeout: 1000,
});
axios.interceptors.request.use((req) => {
  if (isAuthenticated())
    req.headers["Authorization"] = "Bearer " + isAuthenticated();
  else delete req.headers["Authorization"];
  return req;
});
export default axios;
