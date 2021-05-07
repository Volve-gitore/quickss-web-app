import React, { ChangeEvent, useState, useEffect } from "react";
import Layout from "../../../components/Layout/Admin";
import ClientList from "../../../components/Admin/ClientList";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/configureStore";
import { getClients } from "../../../store/client/actions";
import { IClient } from "../../../store/client/types";

const Clients = () => {
  const { clients }: { clients: IClient[] } = useSelector(
    (state: AppState) => state.clients
  );
  const [searchKey, setSearchKey] = useState<string>("");
  const [allClients, setAllClients] = useState<IClient[]>(clients);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setAllClients(clients);
  }, [clients]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchKey(value);
    const searchResult = clients.filter((item) => {
      return item.name.toLowerCase().startsWith(value.toLowerCase());
    });
 
    console.log(searchResult);
    setAllClients(searchResult);
  };

  const subMenuItems = [
    {
      label: "Clients",
      link: "/admin/clients",
      icon: "fas fa-box-open",
    },
    {
      label: "Add new Client",
      link: "/admin/clients/registration",
      icon: "fas fa-layer-group",
    },
  ];

  return (
    <Layout
      subMenuItems={subMenuItems}
      searchKey={searchKey}
      onSearch={handleSearch}
    >
      <ClientList clients={allClients} />
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
