import { IErrors } from "../../store/hotelResto/types";

export type IHotelRestoState = {
  name: string;
  images: any;
  category: string;
  description: string;
  location: string;
  status: string;
  bouquet: string;
  email: string;
  telephone: string;
  mapUrl: string;
  province: string;
  district: string;
  sector: string;
  next: number;
  back: number;
  active: string;
  spinner: boolean;
};

export type IModalState = {
  open: boolean;
};

export type IView = {
  data: [];
};
