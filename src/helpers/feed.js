import axios from "./axios";
import store from "../store/store";

export const getFeedPosts = async (limit = 10, offset = 0) => {
  const { username } = store.getState().profile;

  return axios
    .get(`/user/get-feed/${username}?limit=${limit}&offset=${offset}`)
    .then((res) => res.data)
    .catch((res) => {
      throw res?.response?.data || { success: false, message: res.message };
    });
};
