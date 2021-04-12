export const GET_ALL_HOTEL_RESTO = "GET_ALL_HOTEL_RESTO";
export const REGISTER_HOTEL_RESTO = "REGISTER_HOTEL_RESTO";
export const ERRORS = "ERRORS";

export interface IErrors {
  status: number;
  statusText: string;
}

export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IHotelRestoParams {
  id?: string;
  name: string;
  images: any;
  category: string;
  description: string;
  location: string;
  status: string;
  bouquet: string;
}

interface IViewHotelResto {
  type: typeof GET_ALL_HOTEL_RESTO;
  payload: {
    allHotelResto: IHotelRestoParams[];
  };
}

interface IRegisterHotelResto {
  type: typeof REGISTER_HOTEL_RESTO;
  payload: {
    message: string;
  };
}

interface IRegisterHotelRestoErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type IHotelRestoType =
  | IRegisterHotelResto
  | IRegisterHotelRestoErrors
  | IViewHotelResto;
