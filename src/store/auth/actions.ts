import axios from "axios";
import { LOGIN, ERRORS, ILoginParams } from "./types";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";

export const authActions = (
  formData: ILoginParams, history:any
): AppThunk => async dispatch => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/api/user/auth/signin";
    const { data } = await axios.post(URL, formData);
    if (data) {
      dispatchHandler({ type: LOGIN, data: data, dispatch });
      localStorage.setItem("QUICKSS-USER-TOKEN", data.token);
      if(data.user.role === "admin"){
        history.push('/admin/dashboard');
      }
      if(data.user.role === "client"){
        history.push('/client/dashboard');
      }
    }
  } catch (error) {
    if (error) {
      const data = error || error.response;
      return dispatchHandler({
        type: ERRORS,
        data,
        dispatch
      });
    }
  }
};

export const SignOut = () => {
  localStorage.removeItem("QUICKSS-USER-TOKEN");
  window.location.replace('/signin');

};
