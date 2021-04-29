import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "../containers/Auth/SignIn";

const AuthRoutes: FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={Signin} />
      <Route path='/signin' exact component={Signin} />
    </Switch>
  );
};

export default AuthRoutes;
