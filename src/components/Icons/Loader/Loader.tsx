import React, { FC } from "react";
import {HandySvg} from 'handy-svg';
import iconSrc from '../../../icons/Loader.svg';
import styles from "./Loader.module.css"
import { TLoaderProps } from "../../../utils/types";

const Loader:FC<TLoaderProps> = ({width, height}): JSX.Element => {
  return (
    <HandySvg
        src={iconSrc}
        className={styles.rotation}
        width={width || "29"}
        height={height || "29"}
    />
   );
};

export default Loader;


