import axios from "axios";
import {
  REGISTER_HOTEL_RESTO,
  ERRORS,
  GET_ALL_HOTEL_RESTO,
  IHotelRestoParams
} from "./types";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/helperMothodes";

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
    const info: any = new FormData();
    info.append("name", formData.name);
    info.append("category", formData.category);
    info.append("description", formData.description);
    info.append("location", formData.location);
    info.append("status", formData.status);
    info.append("bouquet", formData.bouquet);
    info.append("image", formData.images[0]);
    const URL = "/api/hotel-resto";
    const { data } = await axios.post(URL, info, header);
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

