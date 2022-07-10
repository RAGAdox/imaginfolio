import { combineReducers } from "@reduxjs/toolkit";

import feedSlice from "./feedSlice";
import profileSlice from "./profileSlice";

export const reducer = combineReducers({
  profile: profileSlice,
  feed: feedSlice,
});
