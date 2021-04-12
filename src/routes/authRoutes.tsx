import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "../components/Auth/Signin";

const AuthRoutes: FunctionComponent = () => {
  return (
    <Switch>
      <Route path='/' exact component={Signin} />
      <Route path='/signin' exact component={Signin} />
    </Switch>
  );
};

export default AuthRoutes;
