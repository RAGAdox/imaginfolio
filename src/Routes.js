import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Base from "./components/Base";
import Home from "./screen/Home";
const Routes = () => {
  return (
    <Router>
      <Base>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route
            path="/about"
            exact
            component={() => <h1 className="text-gray-50">About new Style</h1>}
          />
        </Switch>
      </Base>
    </Router>
  );
};

export default Routes;
