import { Dispatch, ReactNode, SetStateAction } from "react";

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
  _id: any;
  allUsers?: any;
};

//Работа с API бекенда
//Краткая информация о студенте
export type TUserDataDetail = {
  email: string;
  cohort: string;
  _id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  allUsers?: any;
};

//Получение списка студентов
export type TUsersDataDetail = {
  total: number;
  items: TUserDataDetail[];
};

//Информация для профиля пользователя
export type TProfile = {
  name: string;
  photo: string;
  city: {
    value: string;
    name: string;
  };
  birthday: string;
  quote: string;
  telegram: string;
  github: string;
  template: string;
};

//Информация о личной жизни студента
export type TProfileInfo = {
  hobby: {
    text: string;
  };
  status: {
    text: string;
  };
  job: {
    text: string;
  };
  edu: {
    text: string;
  };
};

//Полная детальная информации о студенте по ID (тип для get и patch запросов)
export type TProfileID = {
  email: string;
  cohort: string;
  _id: string;
  createdAt: number;
  updatedAt: number | null;
  profile: TProfile;
  info: TProfileInfo;
  reactions: number;
};

//Реакции конкретного пользователя
export type TProfileReactions = {
  text: string;
  _id: string;
  from: {
    value: string;
  };
  target: string;
};

//Получение реакций пользователей для конкретного пользователя
export type TReactionsRequest = {
  total: number;
  items: TProfileReactions[];
};

//Комментарий пользователя
export type TComment = {
  text: string;
  _id: string;
  from: {
    name: string;
    value: string;
  };
  target: string;
  to: {
    name: string;
    _id: string;
    createdAt: null;
    email: string;
  };
};
//Получение всех комментариев пользователей
export type TCommentsRequest = {
  total: number;
  items: TComment[];
};

export type TContext =
  | {
      state: TAuth;
      setState?: Dispatch<SetStateAction<TAuth>> | TFcVoid;
    }
  | any;

export type TProfileDataRequest = {};

export type TFile = {
  email: string;
  cohort: string;
};

export type TProtectedLink = {
  className: string;
  to: string;
  children: ReactNode;
};

export type TStateDataMapPage = {
  isDataRequest: boolean;
  usersData: TProfileID[] | null;
};

export type TCards = {
  users: TProfileID[] | null;
};

export type TNewStudentCard = {
  cohort: string;
  email: string;
};

export type TCalendarInfo = {
  info: TProfile;
};

export type TFeedBackBlock = {
  open: Boolean;
};

export type TReaction = {
  count: number;
  item: string;
};

export type TCard = {
  img: string;
  name: string;
  city: string;
  _id: string;
};
