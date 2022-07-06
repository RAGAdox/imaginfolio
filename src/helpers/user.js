import axios from "./axios";

export const getProfile = (username) => {
  return axios
    .get(`/user/profile/${username}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
