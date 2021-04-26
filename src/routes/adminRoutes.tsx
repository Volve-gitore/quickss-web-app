import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../containers/Admin/Dashboard"
const AdminRoutes: FunctionComponent = () => {
  return (
    <Switch>
      <Route path='/admin/dashboard' exact component={Dashboard} />
    </Switch>
  ); 
};

export default AdminRoutes;
