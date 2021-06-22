import React from "react";

import TextInput from "../../../UI/Inputs/TextInput";
import Grid from "@material-ui/core/Grid";

const AddressForm = (props:any) => {
  const {state} = props;
  return (
    <Grid container spacing={3}>

    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      style={{ margin: "auto" }}
    >
      <TextInput
        value={state.province}
        onChange={props.onChange}
        name="province"
        label="Province"
        id="province"
        select
        SelectProps={{
          native: true,
        }}
      >
        <option></option>
        <option>Kigali</option>
        <option>North</option>
      </TextInput>
      <TextInput
      value={state.district}
        onChange={props.onChange}
        name="district"
        label="District"
        id="district"
        select
        SelectProps={{
          native: true,
        }}
      >
        <option></option>
        <option>Kicukiro</option>
        <option>Gasabo</option>
      </TextInput>
      <TextInput
      value={state.sector}
        onChange={props.onChange}
        name="sector"
        label="Sector"
        id="sector"
        select
        SelectProps={{
          native: true,
        }}
      >
        <option></option>
        <option>Niboye</option>
        <option>Bwiza</option>
      </TextInput>
      <TextInput value={state.location} onChange={props.onChange} id="street" label="Location" name="location" />
      <TextInput value={state.mapUrl} onChange={props.onChange} id="mapUrl" label="Map url" name="mapUrl" />
    </Grid>
    </Grid>
  );
};

export default AddressForm;
