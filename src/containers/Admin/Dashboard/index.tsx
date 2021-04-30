import React, { ChangeEvent, useState, useEffect } from "react";
import Layout from "../../../components/Layout/Admin";
import ClientRegistration from "../../../components/Admin/ClientRegistration/RegisterClient";
import ClientList from "../../../components/Admin/ClientList";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/configureStore";
import { getClients } from "../../../store/client/actions";
import { IClient } from "../../../store/client/types";


const Dashboard = () => {
  const [searchKey, setSearchKey] = useState<String>("");
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
    // eslint-disable-next-line
  }, []);

  const { clients } : {clients: IClient[]} = useSelector((state: AppState) => state.clients);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchKey(value);
  };

  return (
    <Layout onChange={onChange}>
      <Router>
        <Switch>
          <Route
            path="/admin/dashboard"
            exact
            component={() => <ClientList clients={clients} />}
          />
          <Route
            path="/admin"
            exact
            component={() => <h1>Hello</h1>}
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