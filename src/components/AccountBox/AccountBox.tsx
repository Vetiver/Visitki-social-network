import ProtectedLink from "../../HOC/ProtectedLink";
import styles from "./AccountBox.module.css";

const AccountBox = () => {
  return (
    //Тут будет не профиль
    <ProtectedLink to={"profile"} className={styles.accountBox}>
      <img
        className={styles.profilePhoto}
        src="https://aif-s3.aif.ru/images/019/507/eeba36a2a2d37754bab8b462f4262d97.jpg"
        alt="Фото профиля"
      />
      <p className={styles.profileName}>
        Константин Константинопольский
      </p>
    </ProtectedLink>
  );
};

export default AccountBox;
