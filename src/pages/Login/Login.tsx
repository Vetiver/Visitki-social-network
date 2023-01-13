import React from 'react'
import styles from "./Login.module.css"
const Login = () => {
  return (
    <div className={styles.login}>
        <h1 className={styles.login__title}>С кем я учусь?</h1>
        <div className={styles.login__button}>
            <span className={styles.login__buttonText}>Войти с Яндекс ID</span>
        </div>
    </div>
  )
}

export default Login