import axios from "axios";
import { LOGIN, ERRORS, ILoginParams } from "./types";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/helperMothodes";

export const authActions = (
  formData: ILoginParams
): AppThunk => async dispatch => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "http://localhost:5000/api/user/auth/signin";
    const { data } = await axios.post(URL, formData);
    if (data) {
      dispatchHandler({ type: LOGIN, data: data, dispatch });
      localStorage.setItem("QUICKSS-USER-TOKEN", data.token);
      localStorage.setItem("QUICKSS-USER-ROLE", data.user.role);
      window.location.href = "/view-hotel-resto";
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
