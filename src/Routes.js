import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/about" exact component={AboutScreen} />
      </Switch>
    </Router>
  );
};

export default Routes;
