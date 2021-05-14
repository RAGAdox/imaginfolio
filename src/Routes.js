import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Base from "./components/Base";
import Home from "./screen/Home";
import Login from "./screen/Login";
const Routes = () => {
  return (
    <Router>
      <Base>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <React.Fragment />} />
          <Route path="/create" exact component={() => <React.Fragment />} />
          <Route path="/feed" exact component={() => <React.Fragment />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/signup" exact component={() => <React.Fragment />} />
        </Switch>
      </Base>
    </Router>
  );
};

export default Routes;
