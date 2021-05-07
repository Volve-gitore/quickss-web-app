import React, { ChangeEvent, FC } from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Box, Avatar, IconButton, Badge } from "@material-ui/core";
import { Notifications, ExpandMore } from "@material-ui/icons";
import profile from "../../assets/images/profile.jpg";
import Hidden from "@material-ui/core/Hidden";
import SearchField from "../UI/Inputs/SearchField";
import useStyles from "./style";
import "./style.scss";

interface IItem {
  label: string;
  link: string;
}

interface IProps {
  onSearch?: (e: ChangeEvent<HTMLInputElement>) => void | undefined;
  menuItems: IItem[];
  searchKey?: string;
}

const Navbar = (props: IProps) => {
  const { menuItems, searchKey, onSearch } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={clsx(classes.appBar)}>
        <Toolbar>
          <div className={classes.block}>
            <Box display="flex" p={1}>
              <Box p={1} flexGrow={1}>
                <SearchField value={searchKey} onSearch={onSearch} />
              </Box>
              <Box p={1} flexGrow={1}>
                {/* Hide navigation on smaller screens */}
                <Hidden smDown>
                  <nav className="menu-top">
                    <ul>
                      {menuItems &&
                        menuItems.map((item: IItem) => (
                          <li key={item.label}>
                            <Link to={item.link}>{item.label}</Link>
                          </li>
                        ))}
                      {/* <li>
                        <Link to="/admin/clients/register">Client</Link>
                      </li>
                      <li>
                        <Link to="/menu">Menu config</Link>
                      </li> */}
                    </ul>
                  </nav>
                </Hidden>
              </Box>

              {/* Hide notification, profile and more on smaller screens */}
              <Hidden smDown>
                <Box p={1}>
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <Notifications />
                    </Badge>
                  </IconButton>
                </Box>
                <Box p={1}>
                  <Avatar alt="Quick" src={profile} />
                </Box>
                <Box p={1}>
                  <ExpandMore />
                </Box>
              </Hidden>
              <Hidden mdUp>
                <IconButton
                  edge="start"
                  aria-label="open drawer"
                  className={clsx(classes.menuButton)}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
