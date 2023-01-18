import React, { FC } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import LogoIcon from "../Icons/LogoIcon/LogoIcon";
import styles from "./Logo.module.css";

const Logo: FC = () => {
  return (
    //После добавления роутинка тег a надо заменить на <Link to="/"/>
    <Link to="/" className={styles.logo}>
      <LogoIcon />
    </Link>
  );
};

export default Logo;
