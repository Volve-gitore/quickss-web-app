import React, { FunctionComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminRoutes from "./adminRoutes";

const rootRoutes: FunctionComponent = () => {
  return (
    <Router>
      <AdminRoutes />
    </Router>
  );
};

export default rootRoutes;
