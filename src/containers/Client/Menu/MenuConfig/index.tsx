import React, { ChangeEvent, useState, useEffect } from "react";
import Layout from "../../../../components/Layout/Client";
import ClientRegistration from "../../../../components/Admin/ClientRegistration/RegisterClient";
import ClientList from "../../../../components/Admin/ClientList";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../store/configureStore";
import { getClients } from "../../../../store/client/actions";
import { IClient } from "../../../../store/client/types";
import AddCategory from "../../../../components/Client/AddCategory";
import AddGroup from "../../../../components/Client/AddGroup";
import AddProduct from "../../../../components/Client/AddProduct";
import AddFamily from "../../../../components/Client/AddFamily";
import { decode } from "jsonwebtoken";

type Props = {
  history: any;
};
const Clients = (props:Props) => {
  const userToken:any = localStorage.getItem("QUICKSS-USER-TOKEN");
  const token:any = decode(userToken);
  const {role, expiresIn} = token;
  if (!localStorage.getItem("QUICKSS-USER-TOKEN")  || expiresIn < Math.floor(Date.now() / 1000)) {
    props.history.push("/signin");
  }
  if (role !== "client") {
    props.history.goBack();
  }

  const [searchKey, setSearchKey] = useState<String>("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
    // eslint-disable-next-line
  }, []);

  const { clients }: { clients: IClient[] } = useSelector((state: AppState) => state.clients);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchKey(value);
  };
  const subMenuItems = [
    {
      label: "Add product",
      link: "/my/menu/config/product",
      icon: "fas fa-box-open"
    },
    {
      label: "Add group",
      link: "/my/group",
      icon: "fas fa-layer-group"
    },
    {
      label: "Add category",
      link: "/my/category",
      icon: "fab fa-gg-circle"
    },
    {
      label: "Add Family",
      link: "/my/family",
      icon: "fas fa-utensils"
    }, {
      label: "Menu",
      link: "/my/menu",
      icon: "fas fa-bars"
    }
  ];

  return (
    <Router>
      <Layout subMenuItems={subMenuItems}>
        <Switch>
          <Route exact path="/my/family" component={() => <AddFamily />} />
          <Route exact path="/my/group" component={() => <AddGroup />} />
          <Route exact path="/my/category" component={() => <AddCategory />} />
          <Route exact path="/my/product" component={() => <AddProduct />} />
        </Switch>
      </Layout>
    </Router>

  );
};

export default Clients;
