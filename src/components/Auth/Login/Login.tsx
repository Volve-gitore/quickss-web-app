import React, {
  useEffect,
  useState,
  ChangeEvent,
  FormEvent,
  MouseEvent
} from "react";
import "./styles.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { AppState } from "../../../store/configureStore";
import { connect, ConnectedProps } from "react-redux";
import { authActions } from "../../../store/auth/actions";
import { TextField, CircularProgress } from "@material-ui/core";
import { Visibility, Lock, Person } from "@material-ui/icons";
import { IState } from "./types";
import { IModalState } from "../../admin/registerClientType";
import { IErrors } from "../../../store/auth/types";
import ModalBox from "../../helper/modalBox";

const mapStateToProps = (state: AppState) => ({
  authReducer: state.auth
});

const connector = connect(mapStateToProps, { authActions });

type Props = ConnectedProps<typeof connector>;

const Login = (props: Props) => {
  const {
    errors,
    message
  }: {
    errors: IErrors;
    message: string;
  } = props.authReducer;

  useEffect(() => {
    if (message || errors) {
      setModalState({ ...modalState, open: true });
      setState({ ...state, spinner: false });
    }
    // eslint-disable-next-line
  }, [props.authReducer]);

  const [state, setState] = useState<IState>({
    phoneNo: "",
    password: "",
    spinner: false
  });
  const [modalState, setModalState] = useState<IModalState>({
    open: false
  });
  const { phoneNo, password } = state;
  const data = {
    phoneNo,
    password
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setState({ ...state, spinner: true });
    props.authActions(data);
  };
  const handleClose = (event: MouseEvent<HTMLElement>) => {
    setModalState({ ...modalState, open: false });
  };

  return (
    <div>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={message}
        error={errors && errors.statusText}
        title={"Login"}
      />
      <CssBaseline />
      <form onSubmit={onSubmit}>
        <Grid
          className='authCard'
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center"
          }}
        >
          <Grid item md={3} sm={8} xs={3}>
            <Paper className='paper'>
              <h3 className='title-1'>Quickss</h3>
              <h2 className='title-2'>LOGIN</h2>
              <FormControl
                className='margin'
                style={{
                  width: "80%"
                }}
              >
                <TextField
                  className='input-field'
                  variant='outlined'
                  margin='normal'
                  required={true}
                  fullWidth
                  id='phoneNo'
                  label='Phone number'
                  name='phoneNo'
                  autoComplete='phoneNo'
                  autoFocus
                  onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                  InputProps={{
                    startAdornment: <Person className='icon-color' />
                  }}
                />
                <TextField
                  variant='outlined'
                  margin='normal'
                  required={true}
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                  InputProps={{
                    startAdornment: <Lock className='icon-color' />,
                    endAdornment: <Visibility className='icon-color' />
                  }}
                />
                <Button type='submit' variant='contained' className='color'>
                  {state.spinner ? <CircularProgress size={25} /> : "login"}
                </Button>
              </FormControl>
              <p className='default-color'>
                Forgot password?{" "}
                <Link className='pink-color' href='#'>
                  click here
                </Link>
              </p>
            </Paper>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default connector(Login);
