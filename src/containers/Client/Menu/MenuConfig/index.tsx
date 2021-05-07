import React, { ChangeEvent, useState, useEffect } from "react";
import Layout from "../../../../components/Layout/Client";
import ClientRegistration from "../../../../components/Admin/ClientRegistration/RegisterClient";
import ClientList from "../../../../components/Admin/ClientList";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../store/configureStore";
import { getClients } from "../../../../store/client/actions";
import { IClient } from "../../../../store/client/types";


const Clients = () => {
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
  const subMenuItems = [
    {
      label: "Add product",
      link: "/admin/dashboard",
      icon: "fas fa-box-open"
    },
    {
      label: "Add group",
      link: "/admin/dashboard/clients",
      icon: "fas fa-layer-group"
    },
    {
      label: "Add category",
      link: "/admin/dashboard/users",
      icon: "fab fa-gg-circle"
    },
    {
      label: "Add sub-category",
      link: "/admin/dashboard/users",
      icon: "fas fa-object-group"
    },
    {
      label: "Add type",
      link: "/admin/dashboard/users",
      icon: "fas fa-utensils"
    },{
      label: "Menu",
      link: "/admin/dashboard/users",
      icon: "fas fa-bars"
    }
  ];

  return (
    <Layout subMenuItems={subMenuItems}>
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