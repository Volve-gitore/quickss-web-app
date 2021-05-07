import React, { FC, ChangeEvent } from "react";
// import "../../assets/scss/hotelResto.scss";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AddBox from "@material-ui/icons/AddBox";
import { Link } from "react-router-dom";
import "./style.scss";
import Hidden from "@material-ui/core/Hidden";

interface IItem {
  label: string;
  link: string;
  icon: string;
}

interface IMenuItems {
  items: IItem[];
}
const SideMenu = (props: IMenuItems) => {
  const menuItems = props.items;

  return (
    <div>
      <nav className="menu-left">
        <ul>
          {menuItems &&
            menuItems.map((item: IItem) => (
              <li className="menu-item" key={item.label}>
                <Link to={item.link}>
                  <i className={item.icon}></i>
                  <Hidden  only="sm">{item.label}</Hidden>
                </Link>
              </li>
            ))}

          {/* <li className="menu-item">
            <i className="fas fa-box-open"></i>
            <Link to="/">Add product</Link>
          </li>
          <li className="menu-item">
            <i className="fab fa-gg-circle"></i>
            <Link to="/clients">Add group</Link>
          </li>
          <li className="menu-item">
            <i className="fas fa-layer-group"></i>
            <Link to="/menu">Add category</Link>
          </li>
          <li className="menu-item">
            <i className="fas fa-object-group"></i>
            <Link to="/menu">Add sub-category</Link>
          </li>
          <li className="menu-item">
            <i className="fas fa-utensils"></i>
            <Link to="/menu">Add type</Link>
          </li>
          <li className="menu-item">
            <i className="fas fa-bars"></i>
            <Link to="/menu">Menu</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
