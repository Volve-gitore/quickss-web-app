import axios from "axios";
import {
  REGISTER_HOTEL_RESTO,
  ERRORS,
  GET_ALL_HOTEL_RESTO,
  IHotelRestoParams
} from "./types";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/helper.mothodes";

export const hotelRestoRegister = (
  formData: IHotelRestoParams
): AppThunk => async dispatch => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const header = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    const URL = "/api/hotel-resto";
    const { data } = await axios.post(URL, formData, header);
    if (data) {
      dispatchHandler({
        type: REGISTER_HOTEL_RESTO,
        data: "successfully registered.",
        dispatch
      });
    }
  } catch (error) {
    if (error) {
      const data = error.response;
      return dispatchHandler({
        type: ERRORS,
        data,
        dispatch
      });
    }
  }
};

export const hotelRestoView = (): AppThunk => async dispatch => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/api/hotel-resto";
    const { data } = await axios.get(URL);
    if (data) {
      dispatchHandler({
        type: GET_ALL_HOTEL_RESTO,
        data: data.items,
        dispatch
      });
    }
  } catch (error) {
    if (error) {
      const data = error.response;
      return dispatchHandler({
        type: ERRORS,
        data,
        dispatch
      });
    }
  }
};

// export const uploadImage = async ({ file, preset }: { file: any; preset: string }) => {
//   try {
//     const URL = `${process.env.REACT_APP_CLOUDINARY_UPLOAD_URL}`;
//     const form = new FormData();
//     form.append('file', file[0]);
//     form.append('upload_preset', preset);
//     const { data } = await axios.post(URL, form, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     return data;
//   } catch (error) {
//     if (error) {
//       toast.error('image upload failed');
//     }
//   }
// };
