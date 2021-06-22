import React, { FC } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Dashboard from "../containers/Admin/Dashboard"
import Clients from "../containers/Admin/Clients"
import Users from "../containers/Admin/Users"
import ClientsRegistration from "../containers/Admin/Clients/Registration"
import ProtectedRoute  from "./adminProtectedRoutes";

const AdminRoutes = () => {
  return (
      <Switch>
        <ProtectedRoute path='/admin/dashboard' exact component={Dashboard} />
        <ProtectedRoute path='/admin/clients/registration' exact component={ClientsRegistration} />
        <ProtectedRoute path='/admin/clients' exact component={Clients} />
        <ProtectedRoute path='/admin/users' exact component={Users} />
      </Switch>
  ); 
};

export default AdminRoutes;
