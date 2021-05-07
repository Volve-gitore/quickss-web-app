import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Theme, createStyles, withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#d2435e",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#d2435e",
    },
    "& .MuiOutlinedInput-root": {
      //   "& fieldset": {
      //     borderColor: "red",
      //   },
      // "&:hover fieldset": {
      //   borderColor: "yellow",
      // },
      "&.Mui-focused fieldset": {
        borderColor: "#d2435e",
      },
    },
  },
})(TextField);

const TextInput = (props: any) => {
  return (
    <CssTextField
      variant="outlined"
      margin="normal"
      required={true}
      fullWidth
      autoFocus
      size="small"
      {...props}
    >
      {props.children}
    </CssTextField>
  );
};

export default TextInput;
