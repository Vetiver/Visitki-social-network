import React, { FC } from "react";
import styles from "./Preloader.module.css";
import Loader from "../Icons/Loader/Loader";

const Preloader: FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Loader width="100" height="100" />
    </div>
  );
};

export default Preloader;
