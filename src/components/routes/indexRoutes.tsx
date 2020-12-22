import React, { FunctionComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminRoutes from "./adminRoutes";
import AuthRoutes from "./authRoutes";

const rootRoutes: FunctionComponent = () => {
  return (
    <Router>
      <AdminRoutes />
      <AuthRoutes />
    </Router>
  );
};

export default rootRoutes;
