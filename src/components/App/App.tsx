import { FC } from "react";
import Login from "../../pages/Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./App.module.css";

const App: FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.main}>
        <Login />
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
