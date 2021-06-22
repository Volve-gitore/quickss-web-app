import React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { decode } from "jsonwebtoken";

const userToken:any = localStorage.getItem("QUICKSS-USER-TOKEN");
const token:any =  decode(userToken);
const role = token && token.role;
const expiresIn = token && token.expiresIn;

export const adminProtectedRoute = ({ isAdmin, component: Component, ...rest }: {
     [x: string]: any;
     isAdmin: any;
     component: any;
   }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if(userToken && expiresIn > Math.floor(Date.now() / 1000) && isAdmin){
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/signin",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};


function mapStateToProps() {
  return {
    isAdmin: token ? role === "admin" : null,
  };
}

export default connect(mapStateToProps)(adminProtectedRoute);