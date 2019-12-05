import React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginForm, ResetPass, Signupform } from ".";
const Routes = () => (
  <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route path="reset" component={ResetPass} />
    <Route path="signup" component={Signupform} />
  </Switch>
);

export default Routes;
