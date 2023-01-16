import { FC, useState } from "react";
import Login from "../../pages/Login/Login";
import Main from "../../pages/Main/Main";
import { AuthContext } from "../../services/AuthContext";
import { TAuth } from "../../utils/types";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { SearchPage } from "../SearchPage/SearchPage";
import styles from "./App.module.css";

const App: FC = () => {
  const [state, setState] = useState<TAuth>({
    isAuth: false,
    token: null,
    userData: null,
  });

  return (
    <AuthContext.Provider value={{state, setState}}>
      <div className={styles.page}>
        <Header />
        <div className={styles.main}>
          {/* <Login /> */}
          <Main/>
        </div>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
