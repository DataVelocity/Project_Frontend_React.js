import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Routing/Navbar";
import LoginForm from "./Login/login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={LoginForm} />
      <Route path="/newpage" component={Navbar} />
    </Switch>
  );
};

export default Routes;
