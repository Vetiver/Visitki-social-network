import React, { FC } from "react";
import {HandySvg} from 'handy-svg';
import iconSrc from '../../../icons/Loader.svg';
import styles from "./Loader.module.css"

const Loader: FC = () => {
  return (
    <HandySvg
        src={iconSrc}
        className={styles.rotation}
        width="29"
        height="29"
    />
   );
};

export default Loader;


