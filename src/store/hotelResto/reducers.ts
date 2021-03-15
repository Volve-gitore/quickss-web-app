import {
  ERRORS,
  IHotelRestoType,
  REGISTER_HOTEL_RESTO,
  GET_ALL_HOTEL_RESTO,
  IHotelRestoParams
} from "./types";

// export interface IInitial {
//   errors: string[] | string | undefined;
//   allHotelResto: IHotelRestoParams[];
// }

const initialState = {
  errors: null,
  allHotelResto: []
};

export const hotelRestoReducer = (
  state = initialState,
  { type, payload }: IHotelRestoType
) => {
  switch (type) {
    case REGISTER_HOTEL_RESTO:
      return { ...state, message: payload, errors: null };
    case GET_ALL_HOTEL_RESTO:
      return { ...state, allHotelResto: payload };
    case ERRORS:
      return { ...state, errors: payload, message: null };
    default:
      return state;
  }
};
