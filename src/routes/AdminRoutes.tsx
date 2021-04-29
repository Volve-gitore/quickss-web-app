import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../containers/Admin/Dashboard"

const AdminRoutes: FC = () => {
  return (
    <Switch>
      <Route path='/admin/dashboard' exact component={Dashboard} />
    </Switch>
  ); 
};

export default AdminRoutes;
