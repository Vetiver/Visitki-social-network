import React from "react";
import { Link } from "react-router-dom";
import styles from "./AccountBox.module.css";

const AccountBox = () => {
  return (
    //После добавления роутинка тег a надо заменить на <Link to="..."/>
    //Согласно условию путь для студента будет to="/cohort/{name}"
    //А администратора надо переадрисовывать на главную админкм to="/admin"
    <Link to="/profile" className={styles.accountBox}>
      {/* Сюда нужно будет подгружать инфу пользователя полученную  сервера */}
      <img
        className={styles.profilePhoto}
        src="https://aif-s3.aif.ru/images/019/507/eeba36a2a2d37754bab8b462f4262d97.jpg"
        alt="Фото профиля"
      />
      <p className={styles.profileName}>
        {/* Сюда нужно будет подгружать инфу пользователя полученную  сервера */}
        Константин Константинопольский
      </p>
    </Link>
  );
};

export default AccountBox;
