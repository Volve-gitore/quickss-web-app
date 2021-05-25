import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../containers/Admin/Dashboard"
import Clients from "../containers/Admin/Clients"
import ClientsRegistration from "../containers/Admin/Clients/Registration"

const AdminRoutes: FC = () => {
  return (
    <Switch>
      <Route path='/admin/dashboard' exact component={Dashboard} />
      <Route path='/admin/clients/registration' exact component={ClientsRegistration} />
      <Route path='/admin/clients' exact component={Clients} />
    </Switch>
  ); 
};

export default AdminRoutes;
