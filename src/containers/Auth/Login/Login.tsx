import React, { FC, useEffect } from "react";
import { Formik } from "formik";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import TextInput from "../../../components/UI/TextInput";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "55vh",
    borderRadius: 15,
  },
  margin: {
    marginTop: theme.spacing(2),
  },
  authCard: {
    backgroundColor: "#F8F8FA",
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    alignItems: "center",
  },
}));

const Login: FC = (props) => {
  const classes = useStyles();
  useEffect(() => {
    document.title = "Login | QUICKSS";
  });

  return (
    <>
      <CssBaseline />
      <Grid className={classes.authCard}>
        <Grid item md={3} sm={8} xs={3}>
          <Paper className={classes.paper}>
            <h2>Quickss</h2>
            <FormControl
              className={classes.margin}
              style={{
                width: "80%",
              }}
            >
              <TextInput type="text" label="Username" />
          
              <TextInput type="password" label="Password" />
 
              <Button
                variant="contained"
                color="primary"
                className={classes.margin}
              >
                Login
              </Button>
            </FormControl>
            <p>
              Forgot password? <Link href="#">click here</Link>
            </p>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
