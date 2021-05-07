import React from "react";
import TextInput from "../../../UI/Inputs/TextInput";
import Grid from "@material-ui/core/Grid";

const BasicInfoForm = (props: any) => {
  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        style={{ margin: "auto" }}
      >
        <TextInput id="name" label="Name" name="name" />
        <TextInput
          className="inputs"
          label="Type"
          type="type"
          select
          size="small"
          SelectProps={{
            native: true,
          }}
        >
          <option></option>
          <option>hotel</option>
          <option>resto</option>
        </TextInput>
      </Grid>
    </Grid>
  );
};

export default BasicInfoForm;