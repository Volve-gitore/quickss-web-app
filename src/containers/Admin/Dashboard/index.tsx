import React, { ChangeEvent, useState, useEffect } from "react";
import Layout from "../../../components/Layout/Admin";
import ClientRegistration from "../../../components/Admin/ClientRegistration/RegisterClient";
import ClientList from "../../../components/Admin/ClientList";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/configureStore";
import { getClients } from "../../../store/client/actions";
import { IClient } from "../../../store/client/types";
import { decode } from "jsonwebtoken";
type Props = {
  history: any;
}; 
const Dashboard = (props:Props) => {
  const userToken:any = localStorage.getItem("QUICKSS-USER-TOKEN");
  const token:any = decode(userToken);
  const {role, expiresIn} = token; 
  if (!localStorage.getItem("QUICKSS-USER-TOKEN")  || expiresIn < Math.floor(Date.now() / 1000)) {
    props.history.push("/signin");
  }
  if (role !== "admin") {
    props.history.goBack();
  }
  
  const [searchKey, setSearchKey] = useState<String>("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
    // eslint-disable-next-line
  }, []);

  const { clients }: { clients: IClient[] } = useSelector(
    (state: AppState) => state.clients
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
      link: "/admin/dashboard/clients",
    },
    {
      label: "Users",
      link: "/admin/dashboard/users",
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
