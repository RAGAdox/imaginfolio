import axios from "./axios";

export const getProfile = (username) => {
  return axios.get(`/user/profile/${username}`).then((res) => {
    return res.data;
  });
  // .catch((res) => {
  //   //TRIGGER TOAST MESSAGE FOR ERROR
  //   return res?.response?.data || { success: false, message: res.message };
  // });
};
