import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
 
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

interface Props{
    label: string;
    type: string;
}

const TextInput: FC<Props> = (props: Props) => {
    const {label, type} = props;
  const classes = useStyles();
  return (
    <TextField
      className={classes.margin}
      label={label}
      type={type}
      variant="outlined"
      size="small"
    />
  );
};

export default TextInput;
