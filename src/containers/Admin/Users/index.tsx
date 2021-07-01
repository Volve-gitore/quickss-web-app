import React, { ChangeEvent, useState, useEffect } from "react";
import { decode } from "jsonwebtoken";
import Layout from "../../../components/Layout/Admin";
import UserList from "../../../components/Admin/UserList";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/configureStore";
import { getClients } from "../../../store/admin/actions";
import { IClient } from "../../../store/admin/types";

type Props = {
  history: any;
}; 
const Clients = (props:Props) => {
  const userToken:any = localStorage.getItem("QUICKSS-USER-TOKEN");
  const token:any = userToken && decode(userToken);
  const role:any = token && token.role;
  const expiresIn:any = token && token.expiresIn;
  // if (!localStorage.getItem("QUICKSS-USER-TOKEN")  || expiresIn < Math.floor(Date.now() / 1000)) {
  //   props.history.push("/signin");
  // }
  // if (role !== "admin") {
  //   props.history.push('/client/dashboard');
  // }

  const { clients }: { clients: IClient[] } = useSelector(
    (state: AppState) => state.admin
  );
  const [searchKey, setSearchKey] = useState<string>("");
  const [allClients, setAllClients] = useState<IClient[]>(clients);

  const dispatch = useDispatch();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchKey(value);
    const searchResult = clients.filter((item) => {
      return item.name.toLowerCase().startsWith(value.toLowerCase());
    });
  };

  const subMenuItems = [
    {
      label: "Users",
      link: "/admin/users",
      icon: "fas fa-user",
    },
    // {
    //   label: "Add new Client",
    //   link: "/admin/clients/registration",
    //   icon: "fas fa-layer-group",
    // },
  ];

  return (
    <Layout
      subMenuItems={subMenuItems}
      searchKey={searchKey}
      onSearch={handleSearch}
    >
      <UserList />
    </Layout>
  );
};

export default Clients;