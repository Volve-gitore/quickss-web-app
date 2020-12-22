import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Auth/Login/Login";

const AuthRoutes: FunctionComponent = () => {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/login' exact component={Login} />
    </Switch>
  );
};

export default AuthRoutes;
