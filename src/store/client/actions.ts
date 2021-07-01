import axios from "axios";
import { ERRORS, ICreateCategory, ICreateGroup, CREATE_CATEGORY, CREATE_GROUP, 
  ICreateFamily, CREATE_FAMILY, GET_ALL_PRODUCTS, GET_ALL_GROUP, GET_ALL_CATEGORY, GET_ALL_FAMILY, IProduct, CREATE_PRODUCT} from "./types";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";

export const createGroup = (information:ICreateGroup[]): AppThunk => async (dispatch) =>  {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/api/group";
    const { data } = await axios.post(URL, information);
    if (data) {
      dispatchHandler({
        type: CREATE_GROUP,
        data: "groups successfully created.",
        dispatch,
      });
    }
  } catch (error) {
    if (error) {
      const data = error.response;
      return dispatchHandler({
        type: ERRORS,
        data,
        dispatch,
      });
    }
  }
}

export const createCategory = (information:ICreateCategory[]): AppThunk => async (dispatch) =>  {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
  const URL = "/api/category";
  const { data } = await axios.post(URL, information);
  if (data) {
    dispatchHandler({
      type: CREATE_CATEGORY,
      data: "categories successfully created.",
      dispatch,
    });
  }
  } catch (error) {
    if (error) {
      const data = error.response;
      return dispatchHandler({
        type: ERRORS,
        data,
        dispatch,
      });
    }
  }
}

export const createFamily = (information:ICreateFamily[]): AppThunk => async (dispatch) =>  {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
  const URL = "/api/type";
  const { data } = await axios.post(URL, information);
  if (data) {
    dispatchHandler({
      type: CREATE_FAMILY,
      data: "families successfully created.",
      dispatch,
    });
  }
  } catch (error) {
    if (error) {
      const data = error.response;
      return dispatchHandler({
        type: ERRORS,
        data,
        dispatch,
      });
    }
  }
}

export const createProduct= (information:IProduct): AppThunk => async (dispatch) =>  {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
  const URL = "/api/product";

  const header = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const info: any = new FormData();
  info.append("clientId", information.clientId);
  info.append("groupId", information.groupId);
  info.append("type", information.type);
  info.append("categoryId", information.categoryId);
  info.append("name", information.name);
  info.append("currency", information.currency);
  info.append("price", information.price);
  info.append("flag", information.flag);
  info.append("description", information.description);
  info.append("images", information.images);
 
  const { data } = await axios.post(URL, information, header);

  if (data) {
    dispatchHandler({
      type: CREATE_PRODUCT,
      data: "PRODUCT successfully created.",
      dispatch,
    });
  }
  } catch (error) {
    if (error) {
      const data = error.response;
      return dispatchHandler({
        type: ERRORS,
        data,
        dispatch,
      });
    }
  }
}


export const getProducts = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/api/product/all/c93a072d-45c9-432a-b1ca-850a76b53908";
    const { data } = await axios.get(URL);
    if (data) {
      dispatchHandler({
        type: GET_ALL_PRODUCTS,
        data: data,
        dispatch,
      });
    }
  } catch (error) {
    if (error) {
      const data = error.response;
      return dispatchHandler({
        type: ERRORS,
        data,
        dispatch,
      });
    }
  }
};

export const getGroups = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/api/group/all/c93a072d-45c9-432a-b1ca-850a76b53908";
    const { data } = await axios.get(URL);
    if (data) {
      dispatchHandler({
        type: GET_ALL_GROUP,
        data: data,
        dispatch,
      });
    }
  } catch (error) {
    if (error) {
      const data = error.response;
      return dispatchHandler({
        type: ERRORS,
        data,
        dispatch,
      });
    }
  }
};

export const getCategories = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/api/category/all/c93a072d-45c9-432a-b1ca-850a76b53908";
    const { data } = await axios.get(URL);
    if (data) {
      dispatchHandler({
        type: GET_ALL_CATEGORY,
        data: data,
        dispatch,
      });
    }
  } catch (error) {
    if (error) {
      const data = error.response;
      return dispatchHandler({
        type: ERRORS,
        data,
        dispatch,
      });
    }
  }
};

export const getFamilies = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/api/type/all/c93a072d-45c9-432a-b1ca-850a76b53908";
    const { data } = await axios.get(URL);
    if (data) {                                                                                         
      dispatchHandler({
        type: GET_ALL_FAMILY,
        data: data,
        dispatch,
      });                                                                                                                                                                                                                                                                                                                                                                                 
    }                                                                                                                                                                                                                                                                                                    
  } catch (error) {
    if (error) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
      const data = error.response;                                                                                
      return dispatchHandler({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        type: ERRORS,
        data,
        dispatch,
      });
    }
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                