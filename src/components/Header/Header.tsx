import { FC, useContext } from "react";
import { AuthContext } from "../../services/AuthContext";
import AccountBox from "../AccountBox/AccountBox";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

const Header: FC = () => {
  const { state } = useContext(AuthContext);
  
  return (
    <div className={styles.header}>
      <Logo />
      {state.isAuth && <AccountBox />}
    </div>
  );
};

export default Header;
