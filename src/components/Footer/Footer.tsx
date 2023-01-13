import {FC} from 'react'
import styles from "./Footer.module.css"

const Footer:FC = () => {
  return (
    <div className={styles.footer}>
        <p className={styles.footerLeft}>© Визитки</p>
        <p className={styles.footerRight}>Яндекс Практикум</p>
    </div>
  )
}

export default Footer