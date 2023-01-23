import { FC, useContext } from "react";
import ProtectedLink from "../../HOC/ProtectedLink";
import { AuthContext } from "../../services/AuthContext";
import styles from "./AccountBox.module.css";

const AccountBox: FC = (): JSX.Element => {
  const { state } = useContext(AuthContext);
  return (
    //Тут будет не профиль
    <ProtectedLink to={state.isAdmin ? '/admin' : `/details/:${state.id}`} className={styles.accountBox}>
      {!state.isAdmin ? (
        <img
          className={styles.profilePhoto}
          src={state.userData.profile.photo}
          alt="Фото профиля"
        />
      ) : (
        <div className={styles.profilePhotoAdmin} />
      )}
      <p className={styles.profileName}>
        {!state.isAdmin ? state.userData.profile.name : "Панель администратора"}
      </p>
    </ProtectedLink>
  );
};

export default AccountBox;
