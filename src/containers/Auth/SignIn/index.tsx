
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
  import { connect, ConnectedProps } from "react-redux";
  import { authActions } from "../../../store/auth/actions";
  import { TextField, CircularProgress } from "@material-ui/core";
  import {
    VisibilityOutlined,
    VisibilityOffOutlined,
    PhoneIphone,
    LockOutlined,
  } from "@material-ui/icons";
  import ModalBox from "../../../components/UI/Modal";
  
  const mapStateToProps = (state: AppState) => ({
    authReducer: state.auth,
  });
  
  const connector = connect(mapStateToProps, { authActions });
  
  type Props = ConnectedProps<typeof connector>;
  
  const SignIn = (props: Props) => {
    const {
      errors,
      message,
    }: {
      errors: any;
      message: string;
    } = props.authReducer;
    const [isPasswordField, setIsPasswordField] = useState(true);
    useEffect(() => {
      if (message || errors) {
        setModalState({ ...modalState, open: true });
        setState({ ...state, spinner: false });
      }
      // eslint-disable-next-line
    }, [props.authReducer]);
  
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
          <Grid className="auth-card">
            <Grid item md={4} sm={8} xs={3}>
              <Paper className="paper">
                <h3 className="title-1">QUICKSS</h3>
                <h5 className="title-2">LOGIN</h5>
                <FormControl>
                  <TextField
                    className="input-field"
                    required
                    placeholder="Phone number"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    fullWidth
                    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                    InputProps={{
                      startAdornment: <PhoneIphone className="txt-icon" />,
                    }}
                  />
  
                  <TextField
                    className="input-field"
                    required
                    placeholder="Password"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    type={isPasswordField ? "password" : "text"}
                    fullWidth
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
                  <Button type="submit" variant="contained" className="color">
                    {state.spinner ? <CircularProgress size={25} /> : "login"}
                  </Button>
                </FormControl>
                <p className="default-color">
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
  
  export default connector(SignIn);
  