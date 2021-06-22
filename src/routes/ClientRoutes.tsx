import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import ClientDashboard from "../containers/Client/Dashboard";
import MenuConfig from "../containers/Client/Menu/MenuConfig";
import Menu from "../containers/Client/Menu";
import ProtectedRoute from "./clientProtectedRoutes";

const ClientRoutes: FC = () => {
  return (
    <Switch>
      <ProtectedRoute path="/client/dashboard" exact component={ClientDashboard} />
      {/* <Route path="/my/menu/config" exact component={MenuConfig} /> */}
      <ProtectedRoute path="/client/menu" exact component={Menu} />
    </Switch>
  );
};

export default ClientRoutes;
