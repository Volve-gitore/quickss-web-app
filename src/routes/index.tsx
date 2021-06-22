import React, { FunctionComponent } from "react";
import AdminRoutes from "./AdminRoutes";
import ClientRoutes from "./ClientRoutes";
import AuthRoutes from "./AuthRoutes";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";

const rootRoutes: FunctionComponent = () => {
  return (
    <Router>
      <AdminRoutes />
      <AuthRoutes />
      <ClientRoutes />
    </Router>
  );
};

export default rootRoutes;
