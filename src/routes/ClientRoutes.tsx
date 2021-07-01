import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import ClientDashboard from "../containers/Client/Dashboard";
import MenuConfig from "../containers/Client/Menu/MenuConfig";
import Menu from "../containers/Client/Menu";
import ProtectedRoute from "./clientProtectedRoutes";
// import AddProduct from "../containers/Client/MenuConfig/AddGroup";
// import AddCategory from "../containers/Client/MenuConfig/AddCategory";
// import AddFamily from "../containers/Client/MenuConfig/AddFamily";

const ClientRoutes: FC = () => {
  return (
    <Switch>
      <ProtectedRoute path="/client/dashboard" exact component={ClientDashboard} />
      <ProtectedRoute path="/client/menu" exact component={Menu} />
      <ProtectedRoute path="/client/menu/config" exact component={MenuConfig} />
      {/* <ProtectedRoute path="/client/category" exact component={MenuConfig} />
      <ProtectedRoute path="/client/family" exact component={MenuConfig} /> */}
    </Switch>
  );
};

export default ClientRoutes;
