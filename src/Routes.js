import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Base from "./components/Base";
import Home from "./screen/Home";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import Feed from "./screen/Feed";
const GlobalRoutes = () => {
  return (
    <BrowserRouter>
      <Base>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/about" exact component={() => <React.Fragment />} />
        <Route path="/create" exact component={() => <React.Fragment />} />
        <Route path="/feed" exact component={() => <Feed />} />
        <Route path="/login" exact component={() => <Login />} />
        <Route path="/signup" exact component={() => <SignUp />} />
        <Route path="/logout" exact component={() => <Redirect to="/" />} />
      </Base>
    </BrowserRouter>
  );
};

export default GlobalRoutes;
