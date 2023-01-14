import { psevdoApi } from "../../utils/psevdoApi";
import styles from "./CommentList.module.css";
import deleteIcon from "../../images/delete.png";

export const CommentList = () => {
  return (
    <>
      <div className={styles.list_flags_wrapper}>
        <ul className={styles.list_flags}>
          <li>Когорта</li>
          <li>Дата</li>
          <li>Отправитель</li>
          <li>Получатель</li>
          <li>Откуда комментарий</li>
          <li>Текст комментария</li>
        </ul>
      </div>
      <div className={styles.list_wrapper}>
        <ul className={styles.list}>
          {psevdoApi.map((el, index) => (
            <li className={styles.list_item} key={index}>
              <p className={styles.list_item_text}>{el.team}</p>
              <p className={styles.list_item_text}>{el.date}</p>
              <p className={styles.list_item_text}>{el.fullName}</p>
              <p className={styles.list_item_text}>{el.fullName}</p>
              <p className={styles.list_item_text}>{el.block}</p>
              <p className={styles.list_item_text}>{el.comment}</p>
              <div className={styles.icon_wrapper}>
                <img src={deleteIcon} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
