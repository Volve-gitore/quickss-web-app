import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AddBox from "@material-ui/icons/AddBox";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link
      to='/view-hotel-resto'
      style={{ color: "#000", textDecoration: "none" }}
    >
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary='Home' />
      </ListItem>
    </Link>
    <Link
      to='/add-hotel-resto'
      style={{ color: "#000", textDecoration: "none" }}
    >
      <ListItem button>
        <ListItemIcon>
          <AddBox />
        </ListItemIcon>
        <ListItemText primary='Add new' />
      </ListItem>
    </Link>
  </div>
);
