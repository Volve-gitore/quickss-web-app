import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import RegisterClient from "../components/Admin/ClientRegistration/RegisterClient";
import ViewClient from "../components/Admin/ClientList";
import Dashboard from "../containers/Admin/Dashboard"
const AdminRoutes: FunctionComponent = () => {
  return (
    <Switch>
      <Route path='/admin/dashboard' exact component={Dashboard} />
      <Route path='/admin/view-client' exact component={Dashboard} />
      <Route path='/admin/add-client' exact component={Dashboard} />
    </Switch>
  ); 
};

export default AdminRoutes;
