import React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginForm } from "./components";
const Router = () => (
  <Switch>
    <Route path="/login" component={LoginForm} />
  </Switch>
);

export default Router;
