import React, { ChangeEvent, useState, useEffect, MouseEvent, FormEvent, Props } from "react";
import Layout from "../../../../components/Layout/Admin";
import Upload from "../../../../components/Admin/Client/Upload";
import Stepper from "../../../../components/Stepper";
import BasicForm from "../../../../components/Admin/Client/BasicInfoForm";
import AddressForm from "../../../../components/Admin/Client/AddressForm";
import ContactsForm from "../../../../components/Admin/Client/ContactsForm";
import { useDispatch, useSelector } from "react-redux";
import { IClientState, IModalState } from "../../../../components/Admin/Client/type";
import { IClient, IErrors } from "../../../../store/admin/types";
import { AppState } from "../../../../store/configureStore";
import { registerClient } from "../../../../store/admin/actions";
import ModalBox from "../../../../components/UI/Modal/MessageAlert";


const ClientRegistration = () => {
  const adminReducer = useSelector((state: AppState) => state.admin);
  const dispatch = useDispatch();

    const [state, setState] = useState<IClientState>({
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
      spinner: false,
    });
    const [modalState, setModalState] = useState<IModalState>({
      open: false,
    });
    const {
      name,
      images,
      category,
      description,
      location,
      status,
      bouquet,
    } = state;
    let { next, back, active } = state;
    const {
      errors,
      message,
    }: {
      clients: IClient[];
      errors: IErrors;
      message: string;
    } = adminReducer;
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
      images,
    };
    dispatch(registerClient(info));
  };
  const handleClose = (event: MouseEvent<HTMLElement>) => {
    setModalState({ ...modalState, open: false });
  };

  const steps = ["Client", "Contacts", "Address", "Uploads"]; 
  // const [images, setImages] = useState<any>([]);

  const onHandleFileImages = (f: File[]) => {
    setState({ ...state, images: f });
  };

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, images: e.target.files });
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
  }, [adminReducer]);

  const stepContent = [ 
    <BasicForm state={state} onChange={onChange} />,
    <ContactsForm state={state} onChange={onChange} />,
    <AddressForm state={state} onChange={onChange} />,
    <Upload  state={state} onChange={onChange} onHandleFileImages={onHandleFileImages} onChangeImage={onChangeImage} />,
  ];
  const subMenuItems = [
    {
      label: "Clients",
      link: "/admin/clients",
      icon: "fas fa-box-open",
    },
    {
      label: "Add new Client",
      link: "/admin/clients/registration",
      icon: "fas fa-layer-group",
    },
  ];
  return (
    <Layout subMenuItems={subMenuItems}>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={message}
        error={errors && errors.statusText}
        title={"Register a new client"}
      />
      <Stepper steps={steps} stepContent={stepContent} onSubmit={onSubmit} />
    </Layout>
  );
};

export default ClientRegistration;
