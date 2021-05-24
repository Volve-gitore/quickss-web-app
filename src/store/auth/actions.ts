import axios from "axios";
import { LOGIN, ERRORS, ILoginParams } from "./types";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";

export const authActions = (
  formData: ILoginParams
): AppThunk => async dispatch => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/api/user/auth/signin";
    const { data } = await axios.post(URL, formData);
    console.log(data);
    if (data) {
      dispatchHandler({ type: LOGIN, data: data, dispatch });
      localStorage.setItem("QUICKSS-USER-TOKEN", data.token);
      if(data.user.role === "admin"){
        window.location.href = "/admin/dashboard";
      } else if(data.user.role === "client"){
        window.location.href = "/client/dashboard";
      } else {
        window.location.href = "/client/dashboard";
      }
      
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
