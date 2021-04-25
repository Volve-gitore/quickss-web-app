import React, { ChangeEvent } from "react";
import "../../assets/scss/hotelResto.scss";
import { TextField, Box } from "@material-ui/core";
import { IHotelRestoState } from "./registerClientType";

type Props = {
  state: IHotelRestoState;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const BasicInfoForm = (props: Props) => {
  const { state, onChange } = props;
  return (
    <Box display='flex'>
      <Box style={{ width: "50%" }}>
        <TextField
          className='inputs'
          variant='outlined'
          margin='normal'
          required={true}
          fullWidth
          id='name'
          label='Name'
          name='name'
          value={state.name}
          autoComplete='name'
          autoFocus
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
      </Box>
      <Box style={{ width: "50%" }}>
        <TextField
          className='inputs'
          variant='outlined'
          margin='normal'
          required={true}
          fullWidth
          name='category'
          value={state.category}
          label='Type'
          type='type'
          id='type'
          autoComplete='type'
          select
          SelectProps={{
            native: true
          }}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        >
          <option></option>
          <option>hotel</option>
          <option>resto</option>
        </TextField>
      </Box>
    </Box>
  );
};
export default BasicInfoForm;
