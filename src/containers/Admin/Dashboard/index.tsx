import React, { ChangeEvent, useState, useEffect } from "react";
import Layout from "../../../components/Layout/Admin";
// import ClientRegistration from "../../../components/Admin/ClientRegistration/RegisterClient";
import ClientList from "../../../components/Admin/ClientList";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/configureStore";
import { getClients } from "../../../store/admin/actions";
import { IClient } from "../../../store/admin/types";
import { decode } from "jsonwebtoken";
type Props = {
  history: any;
}; 
const Dashboard = (props:Props) => {
  const userToken:any = localStorage.getItem("QUICKSS-USER-TOKEN");
  const token:any = userToken && decode(userToken);
  const role:any = token && token.role;
  const expiresIn:any = token && token.expiresIn;
  
  const [searchKey, setSearchKey] = useState<String>("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
    // eslint-disable-next-line
  }, []);

  const { clients }: { clients: IClient[] } = useSelector(
    (state: AppState) => state.admin
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchKey(value);
  };
  const menuItems = [
    {
      label: "Home",
      link: "/admin/dashboard",
    },
    {
      label: "Clients",
      link: "/admin/clients",
    },
    {
      label: "Users",
      link: "/admin/users",
    },
  ];


  return (
    <Layout>
      <Router>
        <Switch>
          <Route
            path="/admin/dashboard"
            exact
            component={() => <div style={{width: "80%", margin: "auto"}}><ClientList clients={clients} /></div>}
          />
        </Switch>
      </Router>
    </Layout>
  );
};

export default Dashboard;

// .filter((item) => {
//   return (
//     (item.name &&
//       item.name
//         .toLowerCase()
//         .indexOf(searchKey && searchKey.toLowerCase()) >= 0) ||
//     (item.location &&
//       item.location
//         .toLowerCase()
//         .indexOf(searchKey && searchKey.toLowerCase()) >= 0)
//   );
// })
