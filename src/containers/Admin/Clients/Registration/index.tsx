import React, { ChangeEvent, useState, useEffect } from "react";
import Layout from "../../../../components/Layout/Admin";
import Upload from "../../../../components/Admin/ClientRegistration/Upload";
import Stepper from "../../../../components/Stepper";
import BasicForm from "../../../../components/Admin/Client/BasicInfoForm";
import AddressForm from "../../../../components/Admin/Client/AddressForm";
import ContactsForm from "../../../../components/Admin/Client/ContactsForm";

const ClientRegistration = () => {
  const steps = ["Client", "Contacts", "Address", "Uploads"];
  const [images, setImages] = useState<any>([]);

  const onHandleFileImages = (f: File[]) => {
    setImages(f);
  };

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    setImages(e.target.files);
  };

  const stepContent = [
    <BasicForm />,
    <ContactsForm />,
    <AddressForm />,
    <Upload onHandleFileImages={onHandleFileImages} onChange={onChangeImage} />,
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
      <Stepper steps={steps} stepContent={stepContent} />
    </Layout>
  );
};

export default ClientRegistration;
