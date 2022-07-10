import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "./profileSlice";
import feedReducer from "./feedSlice";
export default configureStore({
  reducer: {
    profile: profileReducer,
    feed: feedReducer,
  },
});
