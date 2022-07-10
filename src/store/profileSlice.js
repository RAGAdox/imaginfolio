import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUsername, isAuthenticated } from "../helpers/auth";

let initialState = {};
if (isAuthenticated()) {
  const username = getCurrentUsername();
  initialState = { token: isAuthenticated(), username };
}
const profileSlice = createSlice({
  name: "profile",
  initialState: initialState || {},
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setStoreUsername: (state, action) => {
      state.username = action.payload.username;
    },

    setProfileFromApi: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearProfile: () => ({}),
  },
});

export const { clearProfile, setToken, setStoreUsername, setProfileFromApi } =
  profileSlice.actions;

export default profileSlice.reducer;
