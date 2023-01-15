import { useState } from "react";
import { AddButtonWrapper } from "../AddButtonWrapepr/AddButtonWrapepr";
import { CommentList } from "../CommentList/CommentList";
import { StudentList } from "../StudentList/StudentList";
import clearIcon from "../../images/clear.png";
import styles from "./Search.module.css";

export const Search = () => {
  const [isUsers, setChange] = useState(true);
  const changeMenu = () => {
    setChange((isUsers) => !isUsers);
  };

  let [state, handleChange] = useState("");

  const userInput = (evt: any) => {
    handleChange((state = evt.target.value));
  };

  const clearSearch = () => {
    handleChange((state = ""));
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
            <div className={styles.search_box}>
              <input
                className={styles.search}
                placeholder="По имени или фамилии или почте или номеру когорты (введите любой из этих параметров)"
                value={state}
                onChange={userInput}
              />
              <img
                src={clearIcon}
                className={styles.clearIcon}
                onClick={clearSearch}
              />
            </div>
            <StudentList />
          </div>
          <AddButtonWrapper />
        </div>
      ) : (
        <div className={styles.search_comments_page}>
          <div className={styles.serch_users_wrapper}>
            <p className={styles.search_title}>Фильтровать</p>
            <div className={styles.search_box}>
              <input
                className={styles.search}
                placeholder="По имени или фамилии или почте или номеру когорты (введите любой из этих параметров)"
              />
              <img
                src={clearIcon}
                className={styles.clearIcon}
                onClick={clearSearch}
              />
            </div>
          </div>
          <CommentList />
        </div>
      )}
    </>
  );
};
