import { ERRORS, AdminType, CREATE_GROUP, CREATE_CATEGORY, CREATE_FAMILY, GET_ALL_PRODUCTS, GET_ALL_GROUP, GET_ALL_CATEGORY, GET_ALL_FAMILY } from "./types";

const initialState = {
  configMenuErrors: null,
  products: [],
  groups: [],
  categories: [],
  families: []
};

export const clientReducer = (
  state = initialState,
  { type, payload }: AdminType
) => {
  switch (type) {
    case ERRORS:
      return { ...state, configMenuErrors: payload, groupMessage: null };
    case CREATE_GROUP:
      return { ...state, groupMessage: payload };
    case CREATE_CATEGORY:
      return { ...state, categoryMessage: payload };
    case CREATE_FAMILY:
      return { ...state, familyMessage: payload };
    case GET_ALL_PRODUCTS:
        return { ...state, products: payload };
    case GET_ALL_GROUP:
        return { ...state, groups: payload };
    case GET_ALL_CATEGORY:
        return { ...state, categories: payload };
    case GET_ALL_FAMILY:
        return { ...state, families: payload };
    default:
      return state;
  }
};
