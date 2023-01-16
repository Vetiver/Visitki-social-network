import { FC } from "react";
import { TButton } from "../../utils/types";
import styles from "./Button.module.css";

// В кнопку передаем текст и size для смены размеров,
// loginButton для кнопки входа, chooseFileButton для кнопки выбора файла.
// Третьим параметром передаем disabled={true/false} 

const Button: FC<TButton> = ({ text, size, disabled, click }) => {

  const buttonStyle = (size: string) => {
    const largeButton = styles.largeButton;
    const smallButton = styles.smallButton;

    if (size === "largeButton") {
      return largeButton;
    } else {
      return smallButton;
    }
  };
  return (
    <>
      <button
        onClick={click}
        disabled={disabled}
        className={`${styles.button} ${buttonStyle(size)}`}
      >
        <span className={styles.buttonText}>{text}</span>
      </button>
    </>
  );
};

export default Button;
