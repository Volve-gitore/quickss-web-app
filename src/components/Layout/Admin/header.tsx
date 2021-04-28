import React, { ChangeEvent } from "react";
import "../../../assets/scss/hotelResto.scss";
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
  Badge
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Notifications, ExpandMore } from "@material-ui/icons";
import profile from "../../../assets/images/profile.jpg";
import {  useLocation } from "react-router-dom";

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85)
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark
          },
    title: {
      flex: "1 1 100%"
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: "50%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
      }
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1
    },
    inputRoot: {
      borderRadius: 20
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "20ch",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch"
        }
      }
    }
  })
);

type Props = {
  onChange?: any;
  children?: any;
};

const Header = (props: Props) => {
  const {onChange} = props;
  const classes = useToolbarStyles();
  const location = useLocation();
  return (
    <div className='content-header'>
      <Box display='flex' p={1}>
        <Box p={1} flexGrow={1}>
        {location.pathname === "/view-client" ?
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            
            <InputBase
              style={{ backgroundColor: "white" }}
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              name="search"
              inputProps={{ "aria-label": "search" }}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
            />
            
            {props.children}
          </div>
          : ""
        }
        </Box>
        <Box p={1}>
          <IconButton color='inherit'>
            <Badge badgeContent={4} color='secondary'>
              <Notifications />
            </Badge>
          </IconButton>
        </Box>
        <Box p={1}>
          <Avatar alt='Quick' src={profile} />
        </Box>
        <Box p={1}>
          <ExpandMore />
        </Box>
      </Box>
    </div>
  );
};

export default Header;
