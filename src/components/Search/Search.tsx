import { FC, useState } from "react";
import { CommentList } from "../CommentList/CommentList";
import { StudentList } from "../StudentList/StudentList";
import styles from "./Search.module.css";

export const Search: FC = () => {
  const [isUsers, setChange] = useState<boolean>(true);
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
      {isUsers ? <StudentList /> : <CommentList />}
    </>
  );
};
