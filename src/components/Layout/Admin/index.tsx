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
import SideMenu from "../../SideMenu";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Footer from "../../Footer";

 

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

type Props = {
  state?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void | undefined;
  children?: any;
};
const AdminLayout = (props: Props) => {
  const { onChange, state, children } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container spacing={3}>
            {/* Top navigation bar */}
            <Grid item xs={12} style={{ height: "12vh" }}>
              <Navbar />
            </Grid>

            {/* Left side menu */}
            <Grid item xs={12} sm={3}>
              {/* <Paper className={classes.papers}> */}
              <nav className="menu-left">
                <ul>
                  <li className="menu-item">
                    <i className="fas fa-box-open"></i>
                    <Link className="menu-item" to="/">Add product</Link>
                  </li>
                  <li className="menu-item">
                    <i className="fab fa-gg-circle"></i>
                    <Link className="menu-item" to="/clients">Add group</Link>
                  </li>
                  <li className="menu-item">
                    <i className="fas fa-layer-group"></i>
                    <Link className="menu-item" to="/menu">Add category</Link>
                  </li>
                  <li className="menu-item">
                    <i className="fas fa-object-group"></i>
                    <Link className="menu-item" to="/menu">Add sub-category</Link>
                  </li>
                  <li className="menu-item">
                    <i className="fas fa-utensils"></i>
                    <Link className="menu-item" to="/menu">Add type</Link>
                  </li>
                  <li className="menu-item">
                    <i className="fas fa-bars"></i>
                    <Link className="menu-item" to="/menu">Menu</Link>
                  </li>
                </ul>
              </nav>
              {/* </Paper> */}
            </Grid>

            <Grid item xs>
              <main  className={classes.papers}>
                 
              </main>
            </Grid>
          </Grid>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AdminLayout;
