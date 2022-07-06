import axios from "./axios";
import { getCurrentUsername } from "./auth";
export const getFeedPosts = async () => {
  const username = await getCurrentUsername();
  if (!!username) {
    return axios
      .get(`/user/get-feed/${username}?limit=5`)
      .then((res) => res.data)
      .catch((res) => {
        return res?.response?.data || { success: false, message: res.message };
      });
  }
  return { success: false, message: "User logged out" };
};
