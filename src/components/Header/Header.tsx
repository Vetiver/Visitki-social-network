import { FC, useContext } from "react";
import ProtectedLink from "../../HOC/ProtectedLink";
import { AuthContext } from "../../services/AuthContext";
import { TContext } from "../../utils/types";
import AccountBox from "../AccountBox/AccountBox";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

const Header: FC = () => {
  const { state } = useContext<TContext>(AuthContext);

  return (
    <div className={styles.header}>
      <Logo />
      {state.isAuth && (
        <div className={styles.profile_wrapper}>
          <AccountBox />
          <ProtectedLink to={"profile"} className={styles.accountBox}>
            <button className={styles.profile_button}>Профиль</button>
          </ProtectedLink>
        </div>
      )}
    </div>
  );
};

export default Header;
