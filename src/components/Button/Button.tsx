import { FC, useEffect } from "react";
import { TButton } from "../../utils/types";
import styles from "./Button.module.css";

{
  /* В кнопку передаем текст и size для смены размеров,
      loginButton для кнопки входа, chooseFileButton для кнопки выбора файла.
      Третьим параметром передаем disabled={true/false} */
}

const Button: FC<TButton> = ({ text, size, disabled }) => {

  const buttonStyle = (size: string) => {
    const loginButton = styles.loginButton;
    const chooseFileButton = styles.chooseFileButton;

    if (size === "loginButton") {
      return loginButton;
    } else {
      return chooseFileButton;
    }
  };
  return (
    <>
      <button
        disabled={disabled}
        className={`${styles.button} ${buttonStyle(size)}`}
      >
        <span className={styles.buttonText}>{text}</span>
      </button>
    </>
  );
};

export default Button;
