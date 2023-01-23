import { FC, useContext } from "react";
import ProtectedLink from "../../HOC/ProtectedLink";
import { AuthContext } from "../../services/AuthContext";
import styles from "./AccountBox.module.css";

const AccountBox: FC = (): JSX.Element => {
  const { state } = useContext(AuthContext)
  
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
