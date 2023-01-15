import React, { FC } from "react";
// import { Link } from "react-router-dom";
import LogoIcon from "../Icons/LogoIcon/LogoIcon";
import styles from "./Logo.module.css"


const Logo: FC = () => {
  return (
    //После добавления роутинка тег a надо заменить на <Link to="/"/>
    <a href="#" className={styles.logo}> 
      <LogoIcon />
    </a>
  );
};

export default Logo;
