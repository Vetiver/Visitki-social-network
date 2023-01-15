import styles from "./StudentList.module.css";
import { psevdoApi } from "../../utils/psevdoApi";

export const StudentList = () => {
  return (
    <div className={styles.content_wrapper}>
      <ul className={styles.list_flags}>
        <li>Номер когорты</li>
        <li>E-mail</li>
        <li>Имя и фамилия студента</li>
      </ul>
      <div className={styles.list_wrapper}>
        <ul className={styles.list}>
          {psevdoApi.map((el, index) => (
            <li className={styles.list_item} key={index}>
              <p className={styles.list_item_text}>{el.team}</p>
              <p className={styles.list_item_text}>{el.email}</p>
              <p className={styles.list_item_text}>{el.fullName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
