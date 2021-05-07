import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import ClientDashboard from "../containers/Client/Dashboard";

const ClientRoutes: FC = () => {
  return (
    <Switch>
      <Route path="/client/dashboard" exact component={ClientDashboard} />
    </Switch>
  );
};

export default ClientRoutes;
