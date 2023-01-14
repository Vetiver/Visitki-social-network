import React from "react";
import Button from "../../components/Button/Button";
import styles from "./Login.module.css";
const Login = () => {

  return (
    <form className={styles.login}>
      <h1 className={styles.login__title}>С кем я учусь?</h1>
      <Button />
    </form>
  );
};

export default Login;
