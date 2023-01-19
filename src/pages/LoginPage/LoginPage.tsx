import { FC, useEffect, useContext } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { AuthContext } from "../../services/AuthContext";
import { TContext } from "../../utils/types";
import styles from "./LoginPage.module.css";

const LoginPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state, setState } = useContext<TContext>(AuthContext);

  function logIn(
    previousPage: string | null,
    tokenFromHash: string | null
  ): void {
    if (previousPage && tokenFromHash) {
      setState({ ...state, token: tokenFromHash, isAuth: true });
      localStorage.setItem("token", tokenFromHash);
      navigate(previousPage, { replace: true });
    }
  }

  //Запрос на Яндекс ID (OAuth) для авторизации пользователя
  const authorizationRequest = (): void => {
    //После подключения роутинга должна заработать авторизация
    window.location.href =
      "https://oauth.yandex.ru/authorize?response_type=token&client_id=6fba40ed9ec943f3b046eed3854650a3";
  };

  const previousPage = localStorage.getItem("previousPage") || null;

  if (!previousPage) {
    localStorage.setItem("previousPage", "/");
    // localStorage.setItem("previousPage", location.state?.from.pathname || "/");
  }

  useEffect(() => {
    function handleEnterKeydown(evt: KeyboardEvent) {
      if (evt.key === "Enter") {
        //Фейковая авторизация
        authorizationRequest();
      }
    }
    document.addEventListener("keydown", handleEnterKeydown);

    return () => {
      document.removeEventListener("keydown", handleEnterKeydown);
    };
  }, []);

  useEffect(() => {
    if (state.isAuth) {
      navigate("/", { replace: true });
      localStorage.removeItem("previousPage");
    }

    const tokenFromHash = location.hash.split("&")[0].split("=")[1] || null;
    if (tokenFromHash) {
      logIn(previousPage, tokenFromHash);
      localStorage.removeItem("previousPage");
    }
  }, []);

    if (state.isAuth) { return <Navigate to={"/"} state={{ from: location }} />; }

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

export default LoginPage;
