import { FC } from "react";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footer__copyright}>© Визитки</p>
      <p className={styles.footer__author}>Яндекс Практикум</p>
    </div>
  );
};

export default Footer;
