import { combineReducers } from "@reduxjs/toolkit";

import profileSlice from "./profileSlice";

export const reducer = combineReducers({
  profile: profileSlice,
});
