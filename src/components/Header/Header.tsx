import { FC } from "react";
import AccountBox from "../AccountBox/AccountBox";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <Logo />
      {/* Здесь будет условие нужно ли отрисовывать профиль или нет */}
      <AccountBox />
    </div>
  );
};

export default Header;
