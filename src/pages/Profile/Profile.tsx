import React, { useState } from "react";
import styles from "./Profile.module.css";
import { ReactComponent as ArrowDown } from "../../images/logo/arrow-down.svg";
import { ReactComponent as ArrowUp } from "../../images/logo/arrow-up.svg";
import { ReactComponent as CalendarIcon } from "../../images/logo/calendar.svg";
import { ReactComponent as Clip } from "../../images/logo/clip.svg";
import Avatar from "react-avatar";
import { Calendar } from "../../components/Calendar/Calendar";
import photo from '../../images/Ellipse.png'

const dataForSelect: Array<string> = [
  "moscow",
  "minsk",
  "kyiv",
  "moscow",
  "minsk",
  "kyiv",
];
const dataForLine = ["серьезный", "несерьезный"];

type TSelect = {
  data: Array<string>;
};

function Select({ data }: TSelect) {
  return (
    <div className={styles.select}>
      <ul className={styles.select__list}>
        {data.map((el) => (
          <li className={styles.select__item}>{el}</li>
        ))}
        <li
          className={`${styles.select__item} ${styles.select__item_selected}`}
        >
          {"fdvmkl"}
        </li>
      </ul>
    </div>
  );
}

function Profile() {
  const [file, setFile] = useState<any>();
  function handleChange(e: any) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <main className={styles.main}>
      <div className={styles.photo__container}>
        <h4 className={styles.photo__load}>Загрузите фото*</h4>
      <label className={styles.avatar} htmlFor="file"><Avatar style={{position: 'relative', border: '1px solid black'}} src={file == (null) ? '' : file} color="white" round="100px" size="150px"></Avatar><img className={styles.photo__hover} src={photo} alt="photo" /></label>
        <input className={styles.avatar} type="file" accept="image/*" onChange={handleChange} name="file" id="file"/>
        <p className={styles.photo__size}>(размер не менее 440х440)</p>
      </div>
      <form className={styles.form} action="">
        <div className={styles.input__container}>
          <p className={styles.input__title}> Дата рождения *</p>

          <Calendar />
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}> Выберите город *</p>
          <div className="styles.select__container">
            <select className={styles.select__tag} name="" id=""></select>
            <Select data={dataForSelect} />
            <ArrowDown className={styles.input__icon} />
            {/* <ArrowUp className={styles.input__icon}/> */}
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
          <select className={styles.select__tag} name="" id="">
            <option value="серьезный">серьезный</option>
            <option value="несерьезный">несерьезный</option>
          </select>
          <ArrowDown className={styles.input__icon} />
          {/* <ArrowUp className={styles.input__icon}/> */}
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

export default Profile;
