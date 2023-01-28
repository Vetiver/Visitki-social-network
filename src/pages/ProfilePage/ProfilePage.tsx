import { FC, useState, useContext } from "react";
import SelectRegionInput from "../../components/SelectRegionInput/SelectRegionInput";
import styles from "./ProfilePage.module.css";
import { ReactComponent as Clip } from "../../images/logo/clip.svg";
import Avatar from "react-avatar";
import { CalendarInput } from "../../components/Calendar/CalendarInput";
import photo from "../../images/Ellipse.png";
import SelectStyleInput from "../../components/SelectStyleInput/SelectStyleInput";
import { AuthContext } from "../../services/AuthContext";
import { TContext, TProfileID } from "../../utils/types";

interface ProfileProps {
  profile: TProfileID;
}

const ProfilePage: FC<ProfileProps> = ({ profile }) => {
  const { state, setState } = useContext<TContext>(AuthContext);
  const [file, setFile] = useState<any>();

  function handleChange(e: any) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return !!profile ? (
    <main className={styles.main}>
      <div className={styles.photo__container}>
        <h4 className={styles.photo__load}>Загрузите фото*</h4>
        <p className={styles.photo__size}>(размер не менее 440х440)</p>
        <label className={styles.avatar} htmlFor="file">
          <Avatar
            style={{ position: "relative", border: "1px solid black" }}
            className={styles.cover}
            src={
              file == null && state.userData.profile !== null
                ? `${state.userData.profile.photo}`
                : file
            }
            color="white"
            round="100px"
            size="150px"
          ></Avatar>
          <img className={styles.photo__hover} src={photo} alt="avatar" />
        </label>
        <input
          className={styles.avatar}
          type="file"
          accept="image/*"
          onChange={handleChange}
          name="file"
          id="file"
        />
      </div>
      <form className={styles.form} action="">
        <div className={styles.input__container}>
          <p className={styles.input__title}> Дата рождения *</p>
          <CalendarInput info={profile.profile} />
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}> Выберите город *</p>
          <div className={styles.select__container}>
            <SelectRegionInput />
          </div>
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}> Ник в телеграм</p>
          <label className={styles.input__label} htmlFor="">
            <input
              className={styles.input}
              placeholder="@example"
              type="text"
              defaultValue={profile.profile.telegram}
            />
          </label>
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}> Ник на гитхабе</p>
          <label className={styles.input__label}>
            <input
              className={styles.input}
              placeholder="@example"
              type="text"
              defaultValue={profile.profile.github}
            />
          </label>
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}> Выберите шаблон *</p>
          <SelectStyleInput />
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}> Девиз, цитата</p>
          <textarea
            className={styles.textarea}
            placeholder="Не более 100 символов"
            maxLength={100}
            defaultValue={profile.profile.quote}
          ></textarea>
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}> Увлечения, досуг, интересы</p>
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
            maxLength={300}
            defaultValue={profile.info.hobby.text}
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
            maxLength={300}
            defaultValue={profile.info.edu.text}
          ></textarea>
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}>
            Из какой сферы пришёл? Кем работаешь?
          </p>
          <textarea
            className={styles.textarea}
            placeholder="Не более 300 символов"
            maxLength={300}
            defaultValue={profile.info.job.text}
          ></textarea>
        </div>

        <div className={styles.input__container}>
          <p className={styles.input__title}>
            Почему решил учиться на веб-разработчика?
          </p>

          <textarea
            className={styles.textarea}
            placeholder="Не более 300 символов"
            maxLength={300}
          ></textarea>
        </div>

        <p className={styles.warning}>
          Поля, отмеченные звездочкой, обязательны для&nbsp;заполнения
        </p>
        <button className={styles.profile__button}>Сохранить</button>
      </form>
    </main>
  ) : null;
};

export default ProfilePage;
