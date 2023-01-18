import React, {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./ProfilePage.module.css";
import { ReactComponent as ArrowDown } from "../../images/logo/arrow-down.svg";
import { ReactComponent as ArrowUp } from "../../images/logo/arrow-up.svg";
import { ReactComponent as Calendar } from "../../images/logo/calendar.svg";
import { ReactComponent as Clip } from "../../images/logo/clip.svg";

const dataForSelectRegion: Array<string> = [
  "moscow",
  "minsk",
  "kyiv",
  "moscow",
  "minsk",
  "kyiv",
];
const dataForSelectStyles = ["серьезный", "несерьезный"];

type TSelect = {
  data: Array<string>;
  onClick: (e: SyntheticEvent) => void;
};

function SelectContent({ data, onClick }: TSelect) {
  return (
    <div className={styles.select__content}>
      <ul className={styles.select__list} onClick={onClick}>
        {data.map((el) => (
          <li className={styles.select__item}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

function ProfilePage () {
  const selectForRegion = useRef<HTMLDivElement>(null);
  const selectForStyles = useRef<HTMLDivElement>(null);
  const [selectStyleData, setSelectStyleData] = useState({
    content: "",
    active: false,
  });
  const [selectRegionData, setSelectRegionData] = useState({
    content: "",
    active: false,
  });

  const setSelectRegionActive = () => {
    setSelectRegionData({
      ...selectRegionData,
      active: !selectRegionData.active,
    });
  };
  const setSelectStylesActive = () => {
    setSelectStyleData({ ...selectStyleData, active: !selectStyleData.active });
  };

  useEffect(() => {
    selectForRegion.current!.innerHTML = selectRegionData.content;
    selectForStyles.current!.innerHTML = selectStyleData.content;
  }, [selectRegionData, selectStyleData]);

  const setSelectRegionDataContent = (e: SyntheticEvent) => {
    const target = e.target as HTMLLIElement;
    const targetValue = target.innerText;
    setSelectRegionData({ active: false, content: targetValue });
  };

  const setSelectStyleDataContent = (e: SyntheticEvent) => {
    const target = e.target as HTMLLIElement;
    const targetValue = target.innerText;
    setSelectStyleData({ active: false, content: targetValue });
  };
  return (
    <main className={styles.main}>
      <div className={styles.photo__container}>
        <h4 className={styles.photo__load}>Загрузите фото*</h4>
        <p className={styles.photo__size}>(размер не менее 440х440)</p>
      </div>
      <form className={styles.form} action="">
        <div className={styles.input__container}>
          <p className={styles.input__title}> Дата рождения *</p>
          <label className={styles.input__label} htmlFor="">
            <input className={styles.input} type="date" />
            <Calendar className={styles.input__icon} />
          </label>
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}> Выберите город *</p>
          <div className={styles.select__container}>
            <div
              className={styles.select}
              ref={selectForRegion}
              onClick={setSelectRegionActive}
            ></div>
            {selectRegionData.active && (
              <SelectContent
                data={dataForSelectRegion}
                onClick={setSelectRegionDataContent}
              />
            )}
            {selectRegionData.active ? (
              <ArrowUp className={styles.input__icon} />
            ) : (
              <ArrowDown className={styles.input__icon} />
            )}
          </div>
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}> Ник в телеграм</p>
          <label className={styles.input__label} htmlFor="">
            <input
              className={styles.input}
              placeholder="@example"
              type="text"
            />
          </label>
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}> Ник на гитхабе</p>
          <label className={styles.input__label} htmlFor="">
            <input
              className={styles.input}
              placeholder="@example"
              type="text"
            />
          </label>
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}> Выберите шаблон *</p>
          <div className={styles.select__container}>
            <div
              className={styles.select}
              ref={selectForStyles}
              onClick={setSelectStylesActive}
            ></div>
            {selectStyleData.active && (
              <SelectContent
                data={dataForSelectStyles}
                onClick={setSelectStyleDataContent}
              />
            )}
            {selectStyleData.active ? (
              <ArrowUp className={styles.input__icon} />
            ) : (
              <ArrowDown className={styles.input__icon} />
            )}
          </div>
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}> Девиз, цитата</p>
          <textarea
            className={styles.textarea}
            placeholder="Не более 100 символов"
            maxLength={100}
          ></textarea>
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}> Увлечения, досуг, интересы</p>
          <label
            className={`${styles.input__label} ${styles.input__label_type_file}`}
            htmlFor=""
          >
            <input className={styles.input} type="file" />
            <Clip className={styles.input__icon} />
          </label>
          <p className={styles.input__caption}>
            Рекомендуемый размер фото 230х129
          </p>
          <textarea
            className={styles.textarea}
            placeholder="Не более 300 символов"
            maxLength={100}
          ></textarea>
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}>
            Семья, статус, домашние животные
          </p>
          <label
            className={`${styles.input__label} ${styles.input__label_type_file}`}
          >
            <input className={styles.input} type="file" />
            <Clip className={styles.input__icon} />
          </label>
          <p className={styles.input__caption}>
            Рекомендуемый размер фото 230х129
          </p>
          <textarea
            className={styles.textarea}
            placeholder="Не более 300 символов"
            maxLength={100}
          ></textarea>
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}>
            Из какой сферы пришёл? Кем работаешь?
          </p>

          <textarea
            className={styles.textarea}
            placeholder="Не более 300 символов"
            maxLength={100}
          ></textarea>
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}>
            Почему решил учиться на веб-разработчика?
          </p>

          <textarea
            className={styles.textarea}
            placeholder="Не более 300 символов"
            maxLength={100}
          ></textarea>
        </div>

        <p className={styles.warning}>
          Поля, отмеченные звездочкой, обязательны для&nbsp;заполнения
        </p>
        <button className={styles.profile__button}>Сохранить</button>
      </form>
    </main>
  );
}

export default ProfilePage;
