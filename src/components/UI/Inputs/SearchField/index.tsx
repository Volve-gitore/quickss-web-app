import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: "25px",
    border: "1px solid #C2C2C2",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    padding: 5,
    width: "300px",
  },
  searchIcon: {
    paddingLeft: 10,
    paddingTop: 2,
    height: "100%",
    position: "absolute",
    top: 0,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    color: "grey",
    zIndex: 1,
  },
  inputRoot: {
    borderRadius: 25,
  },
  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const SearchField = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <span className={classes.searchIcon}>
        <SearchIcon />
      </span>
      <InputBase
        style={{ backgroundColor: "white" }}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        // onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e)}
      />
    </div>
  );
};

export default SearchField;
