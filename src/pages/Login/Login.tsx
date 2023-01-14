import { FC, useEffect } from "react";
import Button from "../../components/Button/Button";
import styles from "./Login.module.css";
const Login: FC = () => {
  // Функция для срабатывания при нажатии на Enter: 
  // вместо console.log("Enter") кладём наш onClick и готово
  useEffect(() => {
    function handleEnterKeydown(evt: KeyboardEvent) {
      if (evt.key === "Enter") {
        console.log("Enter");
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
      {/* В кнопку передаем текст и size для смены размеров,
      loginButton для кнопки входа, chooseFileButton для кнопки выбора файла.
      Третьим параметром передаем disabled={true/false} */}
      <Button text="Войти с Яндекс ID" size={"loginButton"} disabled={false}/>
    </div>
  );
};

export default Login;
