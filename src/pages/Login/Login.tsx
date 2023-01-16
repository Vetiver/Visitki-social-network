


//////////КОММЕНТАРИИ НЕ УДАЛЯТЬ!!!!!!!!!!!!!!!!!!!
// КОГДА РОУТИНГ СДЕЛАЕТЕ, Я САМ ВСЕ ПОДКЛЮЧУ




import { FC, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { AuthContext } from "../../services/AuthContext";
import { registrationUser } from "../../utils/api/api";
import { TContext } from "../../utils/types";
import styles from "./Login.module.css";

const Login: FC = () => {
  //const location = useLocation();
  //const navigate = useNavigate();
  const { state, setState } = useContext<TContext>(AuthContext);
  //Фейковый токен для этапа разработки
  const tokenFromHash = "token";

  //Заготовка для использования реального токена, возвращаемого Яндекс OAuth
  // const tokenFromHash = location.hash.split("&")[0].split("=")[1] || null;

  function logIn(page: string | null, tokenFromHash: string): void {
    if (!state.isAuth) {
      setState({ ...state, isAuth: true, token: tokenFromHash });
    };

    //После подключения роутинга использовать условие ниже
    // if (page){
    //   navigate(page, { replace: true })
    // }
  }

  //Фейковая авторизация
  //Запрос на Яндекс ID (OAuth) для авторизации пользователя
  const authorizationRequest = (): void => {
    logIn(previousPage, tokenFromHash);
    //Временная заглушка на данном этапе разработки бекенда
    registrationUser(tokenFromHash).then(res => {setState({...state, isAuth: true, token: tokenFromHash, userData: res})})
    //После подключения роутинга должна заработать авторизация
    // window.location.href =
    //   "https://oauth.yandex.ru/authorize?response_type=token&client_id=6fba40ed9ec943f3b046eed3854650a3";
  };

  const previousPage = localStorage.getItem("previousPage") || null;
  if (!previousPage) {
    //После подключения роутинга убрать строку ниже
    localStorage.setItem("previousPage", "/");

    //После подключения роутинга использовать строку ниже
    // localStorage.setItem("previousPage", location.state.from.pathname || "/")
  }

  useEffect(() => {
    //Заготовка для использования реального токена, возвращаемого Яндекс OAuth
    // if (tokenFromHash) {
    //   setState({...state, isAuth: true, token: tokenFromHash});
    // };

    if (state.isAuth) {
      localStorage.removeItem("previousPage");
    }
  }, []);
  
  useEffect(() => {
    function handleEnterKeydown(evt: KeyboardEvent) {
      if (evt.key === "Enter") {
        //Фейковая авторизация
        authorizationRequest();
        //После подключения реальных данных из Яндекс ID необходимо убрать
        //функцию logIn() отсюда
        logIn(previousPage, state.token);
      }
    }
    document.addEventListener("keydown", handleEnterKeydown);

    return () => {
      document.removeEventListener("keydown", handleEnterKeydown);
    };
  }, []);

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>С кем я учусь?</h1>
      <Button
        click={authorizationRequest}
        text="Войти с Яндекс ID"
        size={"largeButton"}
        disabled={false}
      />
    </div>
  );
};

export default Login;

