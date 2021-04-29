import React, { FunctionComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import AuthRoutes from "./AuthRoutes";

const rootRoutes: FunctionComponent = () => {
  return (
    <Router>
      <AdminRoutes />
      <AuthRoutes />
    </Router>
  );
};

export default rootRoutes;
