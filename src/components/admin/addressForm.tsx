import React, { FunctionComponent, ChangeEvent } from "react";
import "../../assets/scss/hotelResto.scss";
import { TextField, Box } from "@material-ui/core";
import { IHotelRestoState } from "./registerHotelRestoType";

type Props = {
  state: IHotelRestoState;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AddressForm = (props: Props) => {
  const [currency, setCurrency] = React.useState("");

  const { state, onChange } = props;
  const { location, mapUrl, province, district, sector } = state;

  const handleChange = (event: any) => {
    setCurrency(event.target.value);
  };

  const style = {
    width: "300px",
    height: "450px"
  };
  return (
    <Box display='flex'>
      <Box style={{ width: "50%" }}>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='province'
          label='Province'
          id='province'
          autoComplete='province'
          select
          SelectProps={{
            native: true
          }}
          value={state.province}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        >
          <option></option>
          <option>Kigali</option>
          <option>North</option>
        </TextField>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='district'
          label='District'
          id='district'
          autoComplete='district'
          select
          SelectProps={{
            native: true
          }}
          value={state.district}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        >
          <option></option>
          <option>Kicukiro</option>
          <option>Gasabo</option>
        </TextField>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='sector'
          label='Sector'
          id='sector'
          autoComplete='sector'
          select
          SelectProps={{
            native: true
          }}
          value={state.sector}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        >
          <option></option>
          <option>Niboye</option>
          <option>Bwiza</option>
        </TextField>
      </Box>
      <Box style={{ width: "50%" }}>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='street'
          label='Location'
          name='location'
          value={location}
          autoComplete='street'
          autoFocus
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          id='mapUrl'
          label='Map url'
          name='mapUrl'
          autoComplete='mapUrl'
          autoFocus
          value={mapUrl}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
      </Box>
    </Box>
  );
};
export default AddressForm;
