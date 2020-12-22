import React, { Fragment, MouseEvent } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IModalState } from "../admin/registerHotelRestoType";
import { IErrors } from "../../store/hotelResto/types";

type Props = {
  state: IModalState;
  handleClose: (event: MouseEvent<HTMLButtonElement>) => void;
  message: string;
  error: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "fit-content"
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120
    },
    formControlLabel: {
      marginTop: theme.spacing(1)
    }
  })
);

export default function ModalBox(props: Props) {
  const classes = useStyles();

  return (
    <Fragment>
      <Dialog
        fullWidth={true}
        maxWidth='xs'
        open={props.state.open}
        onClose={(e: MouseEvent<HTMLButtonElement>) => props.handleClose(e)}
        aria-labelledby='max-width-dialog-title'
      >
        <DialogTitle id='max-width-dialog-title'>Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {(props.message && props.message) || (props.error && props.error)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e: MouseEvent<HTMLButtonElement>) => props.handleClose(e)}
            // color='primary'
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
