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

//Запрос всех пользователей
export const getUsersData = async () => {
  return await request(`/users`, {
    method: "GET",
    headers: api.headers,
  });
};

//Запрос пользователей. По умолчанию возвращает профили из той же когорты, что и пользователь, который сделал запрос, или ничего.
export const getProfiles = async () => {
  return await request(`/profiles`, {
    method: "GET",
    headers: api.headers,
  });
};

//Запрос профиля конкретного пользователя.
export const getUserProfile = async (_id: string) => {
  return await request(`/profiles${_id}`, {
    method: "GET",
    headers: api.headers,
  });
};

//Изменение данных пользователя
export const putchUserProfile = async (
  _id: string,
  profileData: { profile: any; info: any }
) => {
  return await request(`/profiles${_id}`, {
    method: "PUT",
    headers: api.headers,
    body: JSON.stringify({
      profileData,
    }),
  });
};

//Получение всех реакций
export const getReactionsData = async (_id: string) => {
  return await request(`/profiles/${_id}/reactions`, {
    method: "GET",
    headers: api.headers,
  });
};

//Получение всех реакций
export const postReactionsData = async (
  _id: string,
  reaction: { target: string; text: string }
) => {
  return await request(`/profiles/${_id}/reactions`, {
    method: "POST",
    headers: api.headers,
    body: JSON.stringify({ reaction }),
  });
};

//Добавить нового пользователя Для администратора.
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
  return await request(`/users${_id}`, {
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
  return await request(`/comments/${_id}`, {
    method: "DELETE",
    headers: api.headers,
  });
};
