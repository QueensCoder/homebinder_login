import React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginForm, ResetPass, Signupform } from ".";
const Router = () => (
  <Switch>
    <Route path="/login" component={LoginForm} />
    <Route path="reset" component={ResetPass} />
    <Route path="signup" component={Signupform} />
  </Switch>
);

export default Router;
