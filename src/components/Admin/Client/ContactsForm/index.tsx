import React from "react";
import TextInput from "../../../UI/Inputs/TextInput";
import Grid from "@material-ui/core/Grid";

const ContactsForm = (props: any) => {
  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        style={{ margin: "auto" }}
      >
        <TextInput id="telephone" label="Telephone" name="telephone" />
        <TextInput required={true} id="email" label="Email" name="email" />
        <TextInput id="website" label="Description" name="description" multiline
          rows={4}/>
      </Grid>
    </Grid>
  );
};

export default ContactsForm;
