import { ERRORS, REGISTER_CLIENT, GET_ALL_CLIENTS, AdminType } from "./types";

const initialState = {
  errors: null,
  clients: [],
};

export const adminReducer = (
  state = initialState,
  { type, payload }: AdminType
) => {
  switch (type) {
    case REGISTER_CLIENT:
      return { ...state, message: payload, errors: null };
    case GET_ALL_CLIENTS:
      return { ...state, clients: payload };
    case ERRORS:
      return { ...state, errors: payload, message: null };
    default:
      return state;
  }
};
