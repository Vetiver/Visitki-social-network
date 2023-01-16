//Проверка статуса запроса
export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const registrationUser = async (token: string) => {
  return await fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //Фейковый токен для этапа разработки
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse)
};



