import { FC, useState, useEffect, useContext } from "react";
import ProtectedLink from "../../HOC/ProtectedLink";
import styles from "./AccountBox.module.css";
import { AuthContext } from "../../services/AuthContext";
import { TContext } from "../../utils/types";

const AccountBox: FC = () => {
  const { state, setState } = useContext<TContext>(AuthContext);
  return (
    //Тут будет не профиль
    <ProtectedLink to={"profile"} className={styles.accountBox}>
      <img
        className={styles.profilePhoto}
        src={state.userData.profile.photo}
        alt="Фото профиля"
      />
      <p className={styles.profileName}>
      {state.userData.profile.name}
      </p>
    </ProtectedLink>
  );
};

export default AccountBox;
