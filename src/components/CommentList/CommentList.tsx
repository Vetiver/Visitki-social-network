import styles from "./CommentList.module.css";
import deleteIcon from "../../images/delete.png";
import { deleteComment, getCommentsData } from "../../utils/api/api";
import { useState, useEffect, FC } from "react";
import clearIcon from "../../images/clear.png";

export const CommentList:FC = (): JSX.Element => {
  let [commentsArr, setCommentsArr] = useState([]);

  const updateCommentList = () => {
    getCommentsData().then((res) => {
      let temp: any = [];
      res.items.map((el: any) => {
        temp.push(el);
      });
      setCommentsArr((commentsArr = temp));
    });
  };

  useEffect(() => {
    updateCommentList();
  }, []);

  let temp: any = [];
  let [result, setResult] = useState([]);
  let [word, handleChange] = useState("");

  const userInput = (evt: any) => {
    handleChange((word = evt.target.value));
    if (word !== "") {
      searchInList();
    }
  };

  const clearSearch = () => {
    handleChange((word = ""));
  };

  const removeComment = (id: any) => {
    deleteComment(id);
  };

  const searchInList = () => {
    commentsArr.map((el: any) => {
      let fake = [];
      fake.push(el.from.name);
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
    <>
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
          alt="очистить"
        />
      </div>

      {result.length === 0 && word ? (
        <p className={styles.error}>
          Не удалось никого найти. Исправьте запрос или сбросьте фильтр
        </p>
      ) : (
        <div className={styles.content_wrapper}>
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
              {!word &&
                commentsArr?.map((el: any) => (
                  <li className={styles.list_item} key={el._id}>
                    <p className={styles.list_item_text}>{/*el.cohort*/}</p>
                    <p className={styles.list_item_text}>{/*el.date*/}</p>
                    <p className={styles.list_item_text}>{el.from.name}</p>
                    <p className={styles.list_item_text}>{el.to.name}</p>
                    <p
                      className={styles.list_item_text}
                    >{`Из блока ${el.target}`}</p>
                    <p className={styles.list_item_text}>{el.text}</p>
                    <div className={styles.icon_wrapper}>
                      <img
                        src={deleteIcon}
                        onClick={() => removeComment(el._id)}
                        alt="удалить"
                      />
                    </div>
                  </li>
                ))}
              {word &&
                result.map((el: any) => (
                  <li className={styles.list_item} key={el._id}>
                    <p className={styles.list_item_text}>{el.cohort}</p>
                    <p className={styles.list_item_text}>{el.date}</p>
                    <p className={styles.list_item_text}>{el.from.name}</p>
                    <p className={styles.list_item_text}>{el.to.name}</p>
                    <p
                      className={styles.list_item_text}
                    >{`Из блока ${el.target}`}</p>
                    <p className={styles.list_item_text}>{el.text}</p>
                    <div className={styles.icon_wrapper}>
                      <img
                        src={deleteIcon}
                        onClick={() => removeComment(el._id)}
                        alt="удалить"
                      />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
