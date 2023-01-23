import React, { FC } from "react";
import ProtectedLink from "../../HOC/ProtectedLink";
import LogoIcon from "../Icons/LogoIcon/LogoIcon";
import styles from "./Logo.module.css";

const Logo: FC = (): JSX.Element => {
  return (
    <ProtectedLink to="/" className={styles.logo}>
      <LogoIcon />
    </ProtectedLink>
  );
};

export default Logo;
