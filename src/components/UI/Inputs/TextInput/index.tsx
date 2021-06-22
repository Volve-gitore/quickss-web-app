import React, { ChangeEvent, FC } from "react";
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

// type Props = {
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
//   children:any
// };

const TextInput = (props: any) => {
  // const {onChange, children}= props;
  return (
    <CssTextField
      variant="outlined"
      margin="normal"
      fullWidth
      autoFocus
      size="small"
      {...props}
      onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e)}
    >
      {props.children}
    </CssTextField>
  );
};

export default TextInput;
