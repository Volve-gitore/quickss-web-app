import React, { FunctionComponent, ChangeEvent } from "react";
// import "../../assets/scss/hotelResto.scss";
// import Header from "../helper/header";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import { mainListItems } from "./listItems";
import HomeIcon from "@material-ui/icons/Home";
import AddBox from "@material-ui/icons/AddBox";
import { Link } from "react-router-dom";
import {
  Box,
  makeStyles,
  Theme,
  createStyles,
  lighten,
  fade,
  InputBase,
  Avatar,
  IconButton,
  Badge,
  styled,
} from "@material-ui/core";
import { Notifications, ExpandMore } from "@material-ui/icons";
import profile from "../../../assets/images/profile.jpg";
import "./style.scss";
import Navbar from "../../Navbar";
// import SideMenu from "../../SideMenu";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Footer from "../../Footer";
import SideMenu from "../../SideMenu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "95vh",
    },
    container: {
      width: "95%",
      margin: "auto",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    papers: {
      minHeight: `calc(95vh - 25vh)`,
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      marginBottom: 10,
    },
  })
);

 

interface ISubMenuItems {
  label: string;
  link: string;
  icon: string;
}




type Props = {
  onSearch?: (e: ChangeEvent<HTMLInputElement>) => void | undefined;
  children?: any;
  searchKey?: string;
  subMenuItems?: ISubMenuItems[];
};
const AdminLayout = (props: Props) => {
  const { children, subMenuItems, searchKey, onSearch } = props;
  const classes = useStyles();

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
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container spacing={3}>
            {/* Top navigation bar */}
            <Grid item xs={12} style={{ height: "12vh" }}>
              <Navbar menuItems={menuItems} searchKey={searchKey} onSearch={onSearch} />
            </Grid>
            {subMenuItems && (
              // Left side menu
              <Grid item xs={12} sm={2}>
                {/* <Paper className={classes.papers}> */}
                <SideMenu items={subMenuItems} />
                {/* </Paper> */}
              </Grid>
            )}

            <Grid item xs>
              <main className={classes.papers}>{children}</main>
            </Grid>
          </Grid>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AdminLayout;
