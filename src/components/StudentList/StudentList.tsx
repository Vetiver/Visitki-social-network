import styles from "./StudentList.module.css";
import clearIcon from "../../images/clear.png";
import { useEffect, FC, useState } from "react";
import { getUsersData, changesUsersData } from "../../utils/api/api";
import { AddButtonWrapper } from "../AddButtonWrapepr/AddButtonWrapepr";
import { TUserDataDetail } from "../../utils/types";

export const StudentList: FC = () => {
  let [studentsArr, setStudentsArr] = useState<TUserDataDetail[]>([]);
  let [word, handleChange] = useState("");
  let [result, setResult] = useState<TUserDataDetail[]>([]);

  useEffect(() => {

    getUsersData().then((res) => {
      let temp: TUserDataDetail[] = [];
      res.items.map((el: TUserDataDetail) => {
        temp.push(el);
      });
      setStudentsArr((studentsArr = temp));
    });
  }, []);

  const setUserInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    handleChange((word = evt.target.value));
    if (word != "") {
      searchInList();
    }
  };

  const updateUserInfo = (email: string, cohort: string, id: string) => {
    changesUsersData(email, cohort, id);
  };

  const clearSearch = () => {
    handleChange((word = ""));
  };
  let temp: TUserDataDetail[] = [];

  const searchInList = () => {
    studentsArr.map((el: any) => {
      let fake = [];
      fake.push(el.name, el.email, el.cohort);
      fake.map((w) => {
        if (w.includes(word)) {
          if (!temp.includes(el)) {
            temp.push(el);
          }
        }
      });
    });
    setResult((result = temp));
  };

  return (
    <div className={styles.content_wrapper}>
      <div className={styles.student_list_wrapper}>
        <p className={styles.search_title}>Фильтровать</p>
        <div className={styles.search_box}>
          <input
            className={styles.search}
            placeholder="По имени или фамилии или почте или номеру когорты (введите любой из этих параметров)"
            value={word}
            onInput={setUserInput}
          />
          <img
            src={clearIcon}
            className={styles.clearIcon}
            onClick={clearSearch}
          />
        </div>
        {result.length === 0 && word ? (
          <p className={styles.error}>
            Не удалось никого найти. Исправьте запрос или сбросьте фильтр
          </p>
        ) : (
          <div className={styles.adaptive_box}>
            <ul className={styles.list_flags}>
              <li>Номер когорты</li>
              <li>E-mail</li>
              <li>Имя и фамилия студента</li>
            </ul>
            <div className={styles.list_wrapper}>
              <ul className={styles.list}>
                {!word
                  ? studentsArr?.map((el) => (
                      <li className={styles.list_item} key={el._id}>
                        <input
                          className={styles.list_item_text}
                          value={el.cohort}
                          tabIndex={-1}
                          onChange={() =>
                            updateUserInfo(el.email, el.cohort, el._id)
                          }
                        ></input>
                        <input
                          tabIndex={-1}
                          className={styles.list_item_text}
                          value={el.email}
                          onChange={() =>
                            updateUserInfo(el.email, el.cohort, el._id)
                          }
                        ></input>
                        <p tabIndex={-1} className={styles.list_item_text}>
                          {el.name}
                        </p>
                      </li>
                    ))
                  : result.map((el) => (
                      <li className={styles.list_item} key={el._id}>
                        <input
                          className={styles.list_item_text}
                          value={el.cohort}
                          tabIndex={-1}
                        ></input>
                        <input
                          tabIndex={-1}
                          className={styles.list_item_text}
                          value={el.email}
                        ></input>
                        <p tabIndex={-1} className={styles.list_item_text}>
                          {el.name}
                        </p>
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <AddButtonWrapper />
    </div>
  );
};
