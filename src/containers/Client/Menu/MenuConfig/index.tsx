import React, { ChangeEvent, useState, useEffect, FormEvent } from "react";
import Layout from "../../../../components/Layout/Client";
import ClientList from "../../../../components/Admin/ClientList";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../store/configureStore";
import { getClients } from "../../../../store/admin/actions";
import { IClient } from "../../../../store/admin/types";
import AddCategory from "../../../../components/Client/AddCategory";
import AddGroup from "../../../../components/Client/AddGroup";
import AddProduct from "../../../../components/Client/AddProduct";
import AddFamily from "../../../../components/Client/AddFamily";
import ProtectedRoute from "../../../../routes/clientProtectedRoutes";
import { createProduct, getCategories, getFamilies, getGroups, getProducts } from "../../../../store/client/actions";
import { IGroupCategoryFamily, IProduct } from "../../../../store/client/types";
import { IState } from "./type"

const Clients = () => {

  const [state, setState] = useState<IState>({
    clientId: "",
    groupId: "",
    type: "",
    categoryId: "",
    name: "",
    currency: "",
    price: 0,
    flag: 0,
    description: "",
    images: [],
  });

  const [searchKey, setSearchKey] = useState<String>("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
    dispatch(getGroups());
    dispatch(getCategories());
    dispatch(getFamilies());
    // eslint-disable-next-line 
  }, []);
  
  const {groups, categories, families}: {groups:IGroupCategoryFamily[], categories:IGroupCategoryFamily[], families:IGroupCategoryFamily[]} = useSelector((state:AppState)=> state.client);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // const onHandleFileImages = (f: File[]) => {
  //   setState({ ...state, images: f });
  // };

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, images: e.target.files });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const information:IProduct = {
      clientId: state.clientId,
      groupId: state.groupId,
      type: state.type,
      categoryId: state.categoryId,
      name: state.name,
      currency: state.currency,
      price: state.price,
      flag: state.flag,
      description: state.description,
      images: state.images,
    };
    dispatch(createProduct(information));
  }

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
    <Router>
      <Layout subMenuItems={subMenuItems}>
        <Switch>
          <ProtectedRoute exact path="/client/family" component={() => <AddFamily />} />
          <ProtectedRoute exact path="/client/group" component={() => <AddGroup />} />
          <ProtectedRoute exact path="/client/category" component={() => <AddCategory />} />
          <ProtectedRoute exact path="/client/product" component={() => <AddProduct groups={groups} categories={categories} families={families} onChange={onChange} state={state} onSubmit={onSubmit} onChangeImage={onChangeImage} />} />
        </Switch>
      </Layout>
    </Router>

  );
};

export default Clients;
