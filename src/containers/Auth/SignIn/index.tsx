
import React, {
  useEffect,
  useState,
  ChangeEvent,
  FormEvent,
  MouseEvent,
} from "react";
import "./style.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { AppState } from "../../../store/configureStore";
import { connect, ConnectedProps, useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth/actions";
import { CircularProgress } from "@material-ui/core";
import {
  VisibilityOutlined,
  VisibilityOffOutlined,
  PhoneIphone,
  LockOutlined,
} from "@material-ui/icons";
import ModalBox from "../../../components/UI/Modal/MessageAlert";
import TextField from "../../../components/UI/Inputs/TextInput";
import "../../../assets/scss/main.scss";
import { decode } from "jsonwebtoken";
import { Redirect } from "react-router-dom";

type Props = {
  history: any;
  location:any
};

const SignIn = (props: Props) => {
  const userToken:any = localStorage.getItem("QUICKSS-USER-TOKEN");
  const token:any = userToken && decode(userToken);
  const role:any = token && token.role;
  const expiresIn:any = token && token.expiresIn;
  if (localStorage.getItem("QUICKSS-USER-TOKEN")  && expiresIn > Math.floor(Date.now() / 1000) && role === 'admin') {
    window.location.replace('/admin/dashboard');
  }
  if (localStorage.getItem("QUICKSS-USER-TOKEN")  && expiresIn > Math.floor(Date.now() / 1000) && role === 'client') {
    window.location.replace('/client/dashboard');
  }

  const dispatch = useDispatch();

  const authReducer = useSelector(
    (state: AppState) => state.auth
  );

  const {
    errors,
    message,
  }: {
    errors: any;
    message: string;
  } = authReducer;
  const [isPasswordField, setIsPasswordField] = useState(true);
  useEffect(() => {
    if (message || errors) {
      setModalState({ ...modalState, open: true });
      setState({ ...state, spinner: false });
    }
    // eslint-disable-next-line
  }, [authReducer]);

  const [state, setState] = useState({
    phoneNo: "",
    password: "",
    spinner: false,
  });
  const [modalState, setModalState] = useState({
    open: false,
  });
  const { phoneNo, password } = state;
  const data = {
    phoneNo,
    password,
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setState({ ...state, spinner: true });
    dispatch(authActions(data, props.history));
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
        error={errors && errors.message}
        title={"Login"}
      />
      <CssBaseline />
      <form onSubmit={onSubmit}>
        <Grid className="auth-card">
          <Grid item md={4} sm={8} xs={3}>
            <Paper className="paper">
              <div>
              <h3 className="header">QUICKSS</h3>
              <h5 className="sub-header">LOGIN</h5>
              </div>
              <FormControl>
                <TextField
                  name="phoneNo"
                  required
                  placeholder="Phone number"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                  InputProps={{
                    startAdornment: <PhoneIphone className="txt-icon" />,
                  }}
                />

                <TextField
                  name="password"
                  required
                  type={isPasswordField ? "password" : "text"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                  InputProps={{
                    startAdornment: <LockOutlined className="txt-icon" />,
                    endAdornment: isPasswordField ? (
                      <VisibilityOutlined
                        className="txt-icon-active"
                        onClick={() => setIsPasswordField(!isPasswordField)}
                      />
                    ) : (
                      <VisibilityOffOutlined
                        className="txt-icon-active"
                        onClick={() => setIsPasswordField(!isPasswordField)}
                      />
                    ),
                  }}
                />
                <Button type="submit" variant="contained" className="btn bt-primary pt">
                  {state.spinner ? <CircularProgress size={25} /> : "login"}
                </Button>
              </FormControl>
              <p className="txt-mute">
                Forgot password? 
                  <Link className="pink-color" href="#">
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

export default SignIn;
