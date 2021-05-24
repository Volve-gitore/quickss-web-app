import React, { ChangeEvent } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import "./style.scss";
import Navbar from "../../Navbar";
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
      overflow: "auto"
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
const ClientLayout = (props: Props) => {
  const { children, subMenuItems, searchKey, onSearch } = props;
  const classes = useStyles();

  const menuItems = [
    {
      label: "Home",
      link: "/my/dashboard",
    },
    {
      label: "Menu",
      link: "/my/menu",
    },
  ];

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} style={{ height: "12vh" }}>
              <Navbar menuItems={menuItems} searchKey={searchKey} onSearch={onSearch} />
            </Grid>
            {subMenuItems && (
              <Grid item xs={12} sm={3}>
                <SideMenu items={subMenuItems} />
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

export default ClientLayout;
