import { TProfile, TProfileInfo } from "../types";

const token = localStorage.getItem("token");

const api = {
  url: "/",
  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer " + token,
  },
};

//Проверка статуса запроса
export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

//Обертка для запроса
function request(url: string, options: RequestInit) {
  return fetch(url, options).then(checkResponse);
}
//Запрос пользователей. По умолчанию возвращает профили из той же когорты, что и пользователь, который сделал запрос, или ничего.
export const getDefaultProfiles = async () => {
  return await request(`/profiles`, {
    method: "GET",
    headers: api.headers,
  });
};

//Запрос профиля конкретного пользователя.
export const getUserProfile = async (id: string | null) => {
  return await request(`/profiles/${id}`, {
    method: "GET",
    headers: api.headers,
  });
};

//Изменение данных пользователя. Студентом.
export const patchUserProfile = async (
  _id: string,
  profileData: { profile: TProfile; info: TProfileInfo }
) => {
  return await request(`/profiles/:${_id}`, {
    method: "PATCH",
    headers: api.headers,
    body: JSON.stringify({
      profileData,
    }),
  });
};

//Получение всех реакций
export const getReactionsData = async (_id: string) => {
  return await request(`/profiles/:${_id}/reactions`, {
    method: "GET",
    headers: api.headers,
  });
};

//Отправить реакцию
export const postReactionsData = async (
  _id: string,
  reaction: { target: string; text: string }
) => {
  return await request(`/profiles/:${_id}/reactions`, {
    method: "POST",
    headers: api.headers,
    body: JSON.stringify({ reaction }),
  });
};


//Запрос всех пользователей администратором
export const getUsersData = async () => {
  return await request(`/users`, {
    method: "GET",
    headers: api.headers,
  });
};

//Добавить нового пользователя. Для администратора.
export const postUsersData = async (email: string, cohort: string) => {
  return await request(`/users`, {
    method: "POST",
    headers: api.headers,
    body: JSON.stringify({
      email: email,
      cohort: cohort,
    }),
  });
};

//Изменение данных пользователя. Для администратора.
export const changesUsersData = async (
  email: string,
  cohort: string,
  _id: string
) => {
  return await request(`/users/:${_id}`, {
    method: "PUT",
    headers: api.headers,
    body: JSON.stringify({
      email: email,
      cohort: cohort,
    }),
  });
};

//Получение всех комментариев
export const getCommentsData = async () => {
  return await request(`/comments`, {
    method: "GET",
    headers: api.headers,
  });
};

//Удаление комментария. Для администратора.
export const deleteComment = async (_id: string) => {
  return await fetch(`/comments/38eb4bbe3da2fcf2d4cfcd59`, {
    method: "DELETE",
    headers: api.headers,
  });
};
