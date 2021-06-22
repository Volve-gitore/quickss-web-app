export const GET_ALL_CLIENTS = "GET_ALL_CLIENTS";
export const REGISTER_CLIENT = "REGISTER_CLIENT";
export const ERRORS = "ERRORS";

export interface IErrors {
  status: number;
  statusText: string;
}

export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IClient {
  id?: string;
  name: string;
  images: any;
  category: string;
  description: string;
  location: string;
  status: string;
  bouquet: string;
}

interface IClientList {
  type: typeof GET_ALL_CLIENTS;
  payload: {
    clients: IClient[];
  };
}

interface IRegisterClients {
  type: typeof REGISTER_CLIENT;
  payload: {
    message: string;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type ClientType =
  | IWriteErrors
  | IRegisterClients
  | IClientList;
