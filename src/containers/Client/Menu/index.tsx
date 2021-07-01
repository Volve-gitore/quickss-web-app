import React, { ChangeEvent, useState, useEffect } from "react";
import Layout from "../../../components/Layout/Client";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/configureStore";
import { getClients } from "../../../store/admin/actions";
import { IClient } from "../../../store/admin/types";
import AddCategory from "../../../components/Client/AddCategory";
import AddGroup from "../../../components/Client/AddGroup";
import AddProduct from "../../../components/Client/AddProduct";
import AddFamily from "../../../components/Client/AddFamily";
import MenuItemCard from "../../../components/Client/MenuItemCard";
import { Grid } from "@material-ui/core";
import Button from "../../../components/UI/Button";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextInput from "../../../components/UI/Inputs/TextInput";
import "./style.scss";
import { decode } from "jsonwebtoken";
import ProtectedRoute from "../../../routes/clientProtectedRoutes";
import { IGroupCategoryFamily, IProduct } from "../../../store/client/types";
import { getCategories, getFamilies, getGroups, getProducts } from "../../../store/client/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'inline-flex',
    alignItems: 'center',
    width: 400,
    margin: 10
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
type Props = {
  history: any;
};
const Menu = (props:Props) => {
  const classes = useStyles();
  const [searchKey, setSearchKey] = useState<String>("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line
  }, []);

  const { products }: { products: IProduct[] } = useSelector((state: AppState) => state.client);

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
    <Router>
      <Layout subMenuItems={subMenuItems}>
        <Switch>
          <Route exact path="/client/menu" component={() => <div className="menu-container">
            <div className="menu-header">
             <div className="menu-header-inputs">
             <Paper component="form" className={classes.root}>
                <InputBase
                  className={classes.input}
                  placeholder="search..."
                  inputProps={{ 'aria-label': 'search...' }}
                />
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
              <div  className={classes.root} style={{width: "200px"}}>
                {/* <InputBase
                  className={classes.input}
                  placeholder="Search Google Maps"
                  inputProps={{ 'aria-label': 'search google maps' }}
                /> */}
                <TextInput
                    label="Select"
                    select
                    SelectProps={{
                      native: true,
                  }}
                     
                >
                    <option></option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                </TextInput>
                {/* <Divider className={classes.divider} orientation="vertical" /> */}
              </div>

             </div>
              <div className="menu-header-buttons">
                <Button type="primary" label="Drink" />
                <Button label="Food" />
              </div>
              <div>Products<span className="items-total"> | 12 items</span></div>
            </div>
            <Grid container spacing={2} justify="flex-start">
              {/* <Grid item xs  style={{height: "500px"}}> */}
             {products && products.map((item:IProduct) => (
                <MenuItemCard key={item.id} item={item} />
             ))}
              {/* </Grid> */}
            </Grid>
          </div>} />
          <ProtectedRoute exact path="/client/family" component={() => <AddFamily />} />
          <ProtectedRoute exact path="/client/group" component={() => <AddGroup />} />
          <ProtectedRoute exact path="/client/category" component={() => <AddCategory />} />
          <ProtectedRoute exact path="/client/product" component={() => <AddProduct />} />
        </Switch>
      </Layout>
    </Router>

  );
};

export default Menu;
