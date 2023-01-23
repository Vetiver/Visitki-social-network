import { FC } from "react";
import styles from "./AddButtonWrapepr.module.css";

export const AddButtonWrapper:FC = (): JSX.Element => {
  return (
    <div className={styles.button_wrapper}>
      <p className={styles.button_title}>Добавить студентов</p>
      <p className={styles.button_text}>
        Чтобы добавить новых студентов, загрузите csv или xlsx файл: первая
        колонка должна содержать email студентов, вторая колонка — номер
        когорты.
      </p>
      <button className={styles.button}>Выберите файл</button>
    </div>
  );
};
