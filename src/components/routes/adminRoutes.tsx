import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import RegisterClient from "../admin/registerClient";
import ViewClient from "../admin/viewClient";
const AdminRoutes: FunctionComponent = () => {
  return (
    <Switch>
      <Route path='/view-client' exact component={ViewClient} />
      <Route path='/add-client' exact component={RegisterClient} />
    </Switch>
  );
};

export default AdminRoutes;
