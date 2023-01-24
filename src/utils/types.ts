import { Dispatch, ReactNode, SetStateAction } from "react";

export type TFcVoid = () => void;

export type TLoaderProps = {
  width: string,
  height: string,
}

export type TProfileDetailsID = {
  id?: string
}

export type TButton = {
  click?: () => void;
  text: string;
  size: string;
  disabled?: boolean;
};


export type TCardProps = {
  img: string,
  id: string,
  name: string,
  city: string
}

export type TAuth = {
  isAuth: boolean;
  isAdmin: boolean;
  userData: any | null;
  id: string | null;
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
    geocode: number[];
    name: string;
  };
  birthday: string;
  quote: string;
  telegram: string;
  github: string;
  template: string;
};

export type TProfileInfoItem = {
  text: string,
  image?: string,
  reactions: number,
}

//Информация о личной жизни студента
export type TProfileInfo = {
  hobby: TProfileInfoItem;
  status: TProfileInfoItem;
  job: TProfileInfoItem;
  edu: TProfileInfoItem;
};

//Полная детальная информации о студенте по ID (тип для get и patch запросов)
export type TProfileID = {
  email: string;
  cohort: string;
  _id: string;
  createdAt: number;
  updatedAt: number;
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
    value: string;
  };
  target: string;
  to: {
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

export type TContext = {
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

export type TDefaultProfileData = {
  email: string;
  cohort: string;
  _id: string;
  createdAt: number;
  updatedAt: number;
  profile: {
    name: string;
    photo: string;
    city: {
      name: string;
      geocode: number[];
    };
  };
};

export type TDefaultProfilesData = {
  total: number;
  items: TDefaultProfileData[];
};