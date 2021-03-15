export const LOGIN = "LOGIN";
export const ERRORS = "ERRORS";

export interface IErrors {
  status: string;
  statusText: string;
}

export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface ILoginParams {
  phoneNo: string;
  password: string;
}

interface ILogin {
  type: typeof LOGIN;
  payload: {
    data: ILoginParams;
  };
}

interface ILoginErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type IAuthType = ILogin | ILoginErrors;
