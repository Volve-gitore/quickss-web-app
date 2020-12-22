import React, { ChangeEvent } from "react";
import "../../assets/scss/hotelResto.scss";
import { TextField, Box } from "@material-ui/core";
import { IHotelRestoState } from "./registerHotelRestoType";

type Props = {
  state: IHotelRestoState;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ContactForm = (props: Props) => {
  const { state, onChange } = props;
  return (
    <Box display='flex'>
      <Box style={{ width: "50%" }}>
        <TextField
          variant='outlined'
          margin='normal'
          required={true}
          fullWidth
          id='telephone'
          label='Telephone'
          name='telephone'
          autoComplete='telephone'
          autoFocus
          value={state.telephone}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        />

        <TextField
          variant='outlined'
          margin='normal'
          required={true}
          fullWidth
          id='email'
          label='Email'
          name='email'
          autoComplete='email'
          value={state.email}
          autoFocus
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
      </Box>
      <Box style={{ width: "50%" }}>
        <TextField
          required={true}
          variant='outlined'
          margin='normal'
          fullWidth
          id='website'
          label='Description'
          name='description'
          value={state.description}
          autoComplete='website'
          autoFocus
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
      </Box>
    </Box>
  );
};
export default ContactForm;
