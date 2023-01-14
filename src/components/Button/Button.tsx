import { FC } from "react";
import styles from "./Button.module.css";

const Button: FC = () => {
  return (
    <>
      <button type="submit" className={styles.button}>
        <span className={styles.buttonText}>Войти с Яндекс ID</span>
      </button>
    </>
  );
};

export default Button;
