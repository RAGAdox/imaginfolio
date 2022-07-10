import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store/store";
import "./index.css";
import GlobalRoutes from "./Routes";
import reportWebVitals from "./reportWebVitals";
import { getProfile } from "./helpers/user";
import { setProfileFromApi } from "./store/profileSlice";
import { logout } from "./helpers/auth";
const { username } = store.getState().profile;
if (!!username)
  getProfile(username)
    .then((data) => {
      store.dispatch(setProfileFromApi(data));
    })
    .catch((data) => {
      logout();
    });
ReactDOM.render(
  <Provider store={store}>
    <GlobalRoutes></GlobalRoutes>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
