import React, { FC, useContext } from "react";
import ProtectedLink from "../../HOC/ProtectedLink";
import { AuthContext } from "../../services/AuthContext";
import LogoIcon from "../Icons/LogoIcon/LogoIcon";
import styles from "./Logo.module.css";

const Logo: FC = (): JSX.Element => {
  const { state } = useContext(AuthContext);
  
  return (
    <ProtectedLink to={state.isAdmin ? "admin" : "/"} className={styles.logo}>
      <LogoIcon />
    </ProtectedLink>
  );
};

export default Logo;
