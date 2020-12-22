import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import RegisterHotelResto from "../admin/registerHotelResto";
import ViewHotelResto from "../admin/viewHotelResto";
const AdminRoutes: FunctionComponent = () => {
  return (
    <Switch>
      <Route path='/' exact component={ViewHotelResto} />
      <Route path='/view-hotel-resto' exact component={ViewHotelResto} />
      <Route path='/add-hotel-resto' exact component={RegisterHotelResto} />
    </Switch>
  );
};

export default AdminRoutes;
