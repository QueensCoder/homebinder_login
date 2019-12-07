import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { LoginForm, ResetPass, Signupform, Homepage } from ".";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="reset" component={ResetPass} />
        <Route path="signup" component={Signupform} />
        <Route path="home" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
