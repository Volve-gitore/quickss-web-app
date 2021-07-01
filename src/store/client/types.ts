export const ERRORS = "ERRORS";
export const CREATE_GROUP = "CREATE_GROUP";
export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const CREATE_FAMILY = "CREATE_FAMILY";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_GROUP = "GET_ALL_GROUP";
export const GET_ALL_CATEGORY = "GET_aLL_CATEGORY";
export const GET_ALL_FAMILY = "GET_ALL_FAMILY";
export const CREATE_PRODUCT = "CREATE_PRODUCT"                                                                                                                                                                                                                                                                                   
export interface IErrors {
  status: number;
  statusText: string;
}

export interface ISubErrors {
  message: string;
  fieldName: string;
}
export interface ICreateGroup {
  name: string;
  clientId: string;
}
interface IICreateGroup {
  type: typeof CREATE_GROUP;
  payload: {
    groupMessage: string;
  };
}
export interface ICreateCategory {
  name: string;
  clientId: string;
}
interface IICreateCategory {
  type: typeof CREATE_CATEGORY;
  payload: {
    groupMessage: string;
  };
}
export interface ICreateFamily{
  name: string;
  clientId: string;
}

interface IICreateFamily{
  type: typeof CREATE_FAMILY;
  payload: {
    groupMessage: string;
  };
}
export interface IProduct {
  id?:string,
  name:string,
  type:string,
  currency:string,
  price:number,
  flag:number,
  description:string,
  clientId:string,
  groupId:string,
  categoryId:string,
  subCategoryId?:string,
  images:any;
}

interface IProductList {
  type: typeof GET_ALL_PRODUCTS;
  payload: {
    products: IProduct[];
  };
}

export interface IGroupCategoryFamily {
  id?:string,
  name:string,
  clientId: string
}

interface IIGroup {
  type: typeof GET_ALL_GROUP;
  payload: {
    groups: IGroupCategoryFamily[];
  };
}

interface IICategory {
  type: typeof GET_ALL_CATEGORY;
  payload: {
    category: IGroupCategoryFamily[];
  };
}

interface IIFamily {
  type: typeof GET_ALL_FAMILY;
  payload: {
    families: IGroupCategoryFamily[];
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type AdminType =
  | IWriteErrors
  | IICreateGroup
  | IICreateCategory
  | IICreateFamily
  | IProductList 
  | IIGroup
  | IICategory
  | IIFamily
