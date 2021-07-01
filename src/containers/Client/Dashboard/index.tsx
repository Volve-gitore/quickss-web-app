import React, { ChangeEvent, useState, useEffect } from "react";
import { decode } from "jsonwebtoken";
import Layout from "../../../components/Layout/Client";
import ClientList from "../../../components/Admin/ClientList";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/configureStore";
import { getClients } from "../../../store/admin/actions";
import { IClient } from "../../../store/admin/types";

type Props = {
  history: any;
};
const Clients = (props:Props) => {
  const [searchKey, setSearchKey] = useState<String>("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
    // eslint-disable-next-line
  }, []);

  const { clients } : {clients: IClient[]} = useSelector((state: AppState) => state.admin);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchKey(value);
  };
  const subMenuItems = [
    {
      label: "Add product",
      link: "/client/product",
      icon: "fas fa-box-open"
    },
    {
      label: "Add group",
      link: "/client/group",
      icon: "fas fa-layer-group"
    },
    {
      label: "Add category",
      link: "/client/category",
      icon: "fab fa-gg-circle"
    },
    {
      label: "Add Family",
      link: "/client/family",
      icon: "fas fa-utensils"
    }, {
      label: "Menu",
      link: "/client/menu",
      icon: "fas fa-bars"
    } 
  ];

  return (
    // <Layout subMenuItems={subMenuItems}>
    <Layout>
      <h1>Coming soon!</h1>
    </Layout>
  );
};

export default Clients;



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