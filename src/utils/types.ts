import { Dispatch, SetStateAction } from "react";

export type TFcVoid = () => void;

export type TButton = {
  click?: () => void;
  text: string;
  size: string;
  disabled?: boolean;
};

export type TAuth = {
  isAuth: boolean;
  isAdmin: boolean;
  userData: any | null;
};

export type TContext = {
  state: TAuth;
  setState?: Dispatch<SetStateAction<TAuth>> | TFcVoid;
} | any;

export type TProfileDataRequest = {
}
