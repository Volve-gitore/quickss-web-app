import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import ClientDashboard from "../containers/Client/Dashboard";
import MenuConfig from "../containers/Client/Menu/MenuConfig";
import Menu from "../containers/Client/Menu";

const ClientRoutes: FC = () => {
  return (
    <Switch>
      <Route path="/client/dashboard" exact component={ClientDashboard} />
      {/* <Route path="/my/menu/config" exact component={MenuConfig} /> */}
      <Route path="/my/menu" exact component={Menu} />
    </Switch>
  );
};

export default ClientRoutes;
