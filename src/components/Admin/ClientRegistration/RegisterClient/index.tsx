import React, {
  FormEvent,
  useState,
  ChangeEvent,
  MouseEvent,
  useEffect
} from "react";
import "../../../../assets/scss/hotelResto.scss";
import Layout from "../../../Layout/Admin";
import {
  CssBaseline,
  Button,
  Box,
  makeStyles,
  Theme,
  createStyles,
  CircularProgress
} from "@material-ui/core";
import BasicInfo from "../BasicInformation";
import Contact from "../Contact";
import Address from "../Address";
import Upload from "../Upload";
import { connect, ConnectedProps } from "react-redux";
import { hotelRestoRegister } from "../../../../store/admin/actions";
import { IHotelRestoState, IModalState } from "./type";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import NavButtons from "./NavButtons";
import { IHotelRestoParams, IErrors } from "../../../../store/admin/types";
import { AppState } from "../../../../store/configureStore";
import ModalBox from "../../../UI/modalBox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        padding: theme.spacing(1),
        width: "100%"
      }
    }
  })
);

const mapStateToProps = (state: AppState) => ({
  hotelRestoReducer: state.hotelResto
});
const connector = connect(mapStateToProps, { hotelRestoRegister });
type Props = ConnectedProps<typeof connector>;
const RegisterHotelResto = (props: Props) => {
  const [state, setState] = useState<IHotelRestoState>({
    name: "",
    images: [],
    category: "",
    description: "",
    location: "",
    status: "active",
    email: "",
    telephone: "",
    mapUrl: "",
    province: "",
    district: "",
    sector: "",
    bouquet: "basic",
    next: 0,
    back: 3,
    active: "restaurent",
    spinner: false
  });
  const [modalState, setModalState] = useState<IModalState>({
    open: false
  });
  const {
    name,
    images,
    category,
    description,
    location,
    status,
    bouquet
  } = state;
  let { next, back, active } = state;
  const {
    errors,
    message
  }: {
    allHotelResto: IHotelRestoParams[];
    errors: IErrors;
    message: string;
  } = props.hotelRestoReducer;
  const onBack = (e: FormEvent) => {
    e.preventDefault();
    setState({ ...state, back: back + 1, next: next - 1 });
    if (next === 1 && back === 2) {
      setState({
        ...state,
        next: next - 1,
        back: back + 1,
        active: "restaurent"
      });
    }
    if (next === 2 && back === 1) {
      setState({
        ...state,
        next: next - 1,
        back: back + 1,
        active: "contact"
      });
    }
    if (next === 3 && back === 0) {
      setState({
        ...state,
        next: next - 1,
        back: back + 1,
        active: "address"
      });
    }
  };
  const onNext = (e: FormEvent) => {
    e.preventDefault();
    if (next === 0 && back === 3) {
      setState({
        ...state,
        next: next + 1,
        back: back - 1,
        active: "contact"
      });
    }
    if (next === 1 && back === 2) {
      setState({
        ...state,
        next: next + 1,
        back: back - 1,
        active: "address"
      });
    }
    if (next === 2 && back === 1) {
      setState({
        ...state,
        next: next + 1,
        back: back - 1,
        active: "upload"
      });
    }
  };
  const onSaveAndContinue = (e: FormEvent, param: string) => {
    e.preventDefault();
    if (param === "restaurent") {
      setState({ ...state, active: param, next: 0, back: 3 });
    }
    if (param === "contact") {
      setState({ ...state, active: param, next: 1, back: 2 });
    }
    if (param === "address") {
      setState({ ...state, active: param, next: 2, back: 1 });
    }
    if (param === "upload") {
      setState({ ...state, active: param, next: 3, back: 0 });
    }
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  useEffect(() => {
    if (message || errors) {
      setModalState({ ...modalState, open: true });
      setState({ ...state, spinner: false });
    }
    // eslint-disable-next-line
  }, [props.hotelRestoReducer]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setState({ ...state, spinner: true });
    const info = {
      name,
      category,
      description,
      location,
      status,
      bouquet,
      images
    };
    props.hotelRestoRegister(info);
  };
  const handleClose = (event: MouseEvent<HTMLElement>) => {
    setModalState({ ...modalState, open: false });
  };

  const onHandleFileImages = (f: File[]) => {
    setState({ ...state, images: f });
  };

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, images: e.target.files });
  };

  const classes = useStyles();

  return (
    <div>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={message}
        error={errors && errors.statusText}
        title={"Register a new"}
      />
      <div className='content-form'>
        <Box display='flex' justifyContent='flex-start' pl={10}>
          <Box ml={4} mr={4}>
            <h1> Add a new Hotels or Restorants </h1>
          </Box>
        </Box>

        <Box pl={14} pr={14}>
          <NavButtons onSaveAndContinue={onSaveAndContinue} state={state} />
          <Card className='card'>
            <CardContent>
              <CssBaseline />
              <form className={classes.root} onSubmit={onSubmit}>
                {active === "restaurent" && (
                  <BasicInfo state={state} onChange={onChange} />
                )}
                {active === "contact" && (
                  <Contact state={state} onChange={onChange} />
                )}
                {active === "address" && (
                  <Address state={state} onChange={onChange} />
                )}
                {active === "upload" && (
                  <Upload
                    state={state}
                    onChange={onChange}
                    // onHandleFiles={onHandleFiles}
                    onHandleFileImages={onHandleFileImages}
                    onChangeImage={onChangeImage}
                  />
                )}
                <Box display='flex' p={1}>
                  <Box flexGrow={1}>
                    {next !== 0 && back !== 3 && (
                      <Button
                        type='submit'
                        variant='contained'
                        className='default-btn'
                        onClick={(e: FormEvent<HTMLButtonElement>) => onBack(e)}
                      >
                        back
                      </Button>
                    )}
                  </Box>
                  <Box>
                    {next === 3 && back === 0 ? (
                      <Button
                        type='submit'
                        variant='contained'
                        className='orange-btn'
                      >
                        {state.spinner ? (
                          <CircularProgress size={25} />
                        ) : (
                          "submit"
                        )}
                      </Button>
                    ) : (
                      <Button
                        type='submit'
                        variant='contained'
                        className='orange-btn'
                        onClick={(e: FormEvent<HTMLButtonElement>) => onNext(e)}
                      >
                        save&continue
                      </Button>
                    )}
                  </Box>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  );
};
export default connector(RegisterHotelResto);
