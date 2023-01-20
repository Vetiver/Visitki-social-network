import styles from "./StudentList.module.css";
import clearIcon from "../../images/clear.png";
import { useEffect, useState } from "react";
import { getUsersData } from "../../utils/api/api";
import { AddButtonWrapper } from "../AddButtonWrapepr/AddButtonWrapepr";

export const StudentList = () => {
  let [studentsArr, setStudentsArr] = useState([]);
  let [word, handleChange] = useState("");
  let [result, setResult] = useState([]);

  useEffect(() => {
    getUsersData().then((res) => {
      let temp: any = [];
      res.items.map((el: any) => {
        temp.push(el);
      });
      setStudentsArr((studentsArr = temp));
    });
  }, []);

  const userInput = (evt: any) => {
    handleChange((word = evt.target.value));
    if (word != "") {
      searchInList();
    }
  };

  const clearSearch = () => {
    handleChange((word = ""));
  };
  let temp: any = [];

  const searchInList = () => {
    studentsArr.map((el: any) => {
      let fake = [];
      fake.push(el.name, el.email, el.cohort);
      fake.map((w) => {
        if (w.includes(word)) {
          temp.push(el);
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
            onChange={userInput}
          />
          <img
            src={clearIcon}
            className={styles.clearIcon}
            onClick={clearSearch}
          />
        </div>
        <ul className={styles.list_flags}>
          <li>Номер когорты</li>
          <li>E-mail</li>
          <li>Имя и фамилия студента</li>
        </ul>
        <div className={styles.list_wrapper}>
          <ul className={styles.list}>
            {!word
              ? studentsArr?.map((el: any) => (
                  <li className={styles.list_item} key={el._id}>
                    <input
                      className={styles.list_item_text}
                      defaultValue={el.cohort}
                      tabIndex={-1}
                    ></input>
                    <input
                      tabIndex={-1}
                      className={styles.list_item_text}
                      defaultValue={el.email}
                    ></input>
                    <input
                      tabIndex={-1}
                      className={styles.list_item_text}
                      defaultValue={el.name}
                    ></input>
                  </li>
                ))
              : result.map((el: any) => (
                  <li className={styles.list_item} key={el._id}>
                    <input
                      className={styles.list_item_text}
                      defaultValue={el.cohort}
                      tabIndex={-1}
                    ></input>
                    <input
                      tabIndex={-1}
                      className={styles.list_item_text}
                      defaultValue={el.email}
                    ></input>
                    <input
                      tabIndex={-1}
                      className={styles.list_item_text}
                      defaultValue={el.name}
                    ></input>
                  </li>
                ))}
          </ul>
        </div>
      </div>
      <AddButtonWrapper />
    </div>
  );
};
