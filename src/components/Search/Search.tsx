import { useState } from "react";
import { AddButtonWrapper } from "../AddButtonWrapepr/AddButtonWrapepr";
import { CommentList } from "../CommentList/CommentList";
import { StudentList } from "../StudentList/StudentList";
import styles from "./Search.module.css";

export const Search = () => {
  const [isUsers, setChange] = useState(true);
  const changeMenu = () => {
    setChange((isUsers) => !isUsers);
  };

  return (
    <>
      <nav className={styles.button_wrapper}>
        <button className={styles.button} onClick={changeMenu}>
          СТУДЕНТЫ
        </button>
        <button className={styles.button} onClick={changeMenu}>
          КОММЕНТАРИИ
        </button>
      </nav>
      {isUsers ? (
        <div className={styles.serch_users_page}>
          <div className={styles.serch_users_wrapper}>
            <p className={styles.search_title}>Фильтровать</p>
            <input
              className={styles.search}
              placeholder="По имени или фамилии или почте или номеру когорты (введите любой из этих параметров)"
            />
            <StudentList />
          </div>
          <AddButtonWrapper />
        </div>
      ) : (
        <div className={styles.search_comments_page}>
          <div className={styles.serch_users_wrapper}>
            <p className={styles.search_title}>Фильтровать</p>
            <input
              className={styles.search}
              placeholder="По имени или фамилии или почте или номеру когорты (введите любой из этих параметров)"
            />
          </div>
          <CommentList />
        </div>
      )}
    </>
  );
};
