import { FC, useEffect, useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { AuthContext } from "../../services/AuthContext";
import { getUserProfile } from "../../utils/api/api";
import { TContext, TProfileID } from "../../utils/types";
import styles from "./LoginPage.module.css";

const LoginPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state, setState } = useContext<TContext>(AuthContext);
  const tokenLocal = localStorage.getItem("token") || null;

  function logIn(tokenFromHash: string): void {
    //Записываем данные первого пользователя полученного из массива переданного бекендом
    //Данные администратор или нет, а так же id пользователя хардкодим.
    getUserProfile(state.id).then((res: TProfileID) =>
      setState({ ...state, isAuth: true, isAdmin: false, userData: res })
    );
    localStorage.setItem("token", tokenFromHash);
    navigate("/");
  }

  //Запрос на Яндекс ID (OAuth) для авторизации пользователя
  const authorizationRequest = (): void => {
    window.location.href =
      "https://oauth.yandex.ru/authorize?response_type=token&client_id=6fba40ed9ec943f3b046eed3854650a3";
  };

  useEffect(() => {
    function handleEnterKeydown(evt: KeyboardEvent) {
      if (evt.key === "Enter") {
        authorizationRequest();
      }
    }
    document.addEventListener("keydown", handleEnterKeydown);

    return () => {
      document.removeEventListener("keydown", handleEnterKeydown);
    };
  }, []);

  useEffect(() => {
    const tokenFromHash = location.hash.split("&")[0].split("=")[1] || null;
    if (tokenFromHash) {
      logIn(tokenFromHash);
    }
  }, []);

  return (
    <>
      {!tokenLocal ? (
        <div className={styles.login}>
          <h1 className={styles.login__title}>С кем я учусь?</h1>
          <Button
            click={authorizationRequest}
            text="Войти с Яндекс ID"
            size={"largeButton"}
            disabled={false}
          />
        </div>
      ) : (
        <Navigate to={"/"} state={{ from: location }} />
      )}
    </>
  );
};

export default LoginPage;
