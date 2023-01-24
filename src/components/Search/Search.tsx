import { FC, useState } from "react";
import { CommentList } from "../CommentList/CommentList";
import { StudentList } from "../StudentList/StudentList";
import styles from "./Search.module.css";

export const Search: FC = ():JSX.Element => {
  let [isUsers, setChange] = useState("students");

  const setUsers = () => {
    setChange((isUsers = "students"));
  };

  const setComments = () => {
    setChange((isUsers = "comments"));
  };

  return (
    <>
      <nav className={styles.button_wrapper}>
        <button
          className={`${styles.button} ${
            isUsers === "students" && styles.active
          }`}
          onClick={setUsers}
        >
          СТУДЕНТЫ
        </button>
        <button
          className={`${styles.button} ${
            isUsers === "comments" && styles.active
          }`}
          onClick={setComments}
        >
          КОММЕНТАРИИ
        </button>
      </nav>
      {isUsers === "students" ? <StudentList /> : <CommentList />}
    </>
  );
};
