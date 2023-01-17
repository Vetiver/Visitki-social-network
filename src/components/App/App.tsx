import { FC, useState } from "react";
import Login from "../../pages/Login/Login";
import Main from "../../pages/Main/Main";
import { AuthContext } from "../../services/AuthContext";
import { TAuth } from "../../utils/types";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { SearchPage } from "../SearchPage/SearchPage";
import styles from "./App.module.css";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "../../services/ProtectedRoute/ProtectedRoute";
import Profile from "../../pages/Profile/Profile";

const App: FC = () => {
  const [state, setState] = useState<TAuth>({
    isAuth: false,
    token: null,
    userData: null,
    isAdmin: false,
  });

  return (
    <AuthContext.Provider value={{ state, setState }}>
      <div className={styles.page}>
        <Header />
        <div className={styles.main}>
          <Switch>
            {/* <Login /> */}

            <ProtectedRoute isAuth={state.isAuth} isAdmin={state.isAdmin} anonymous={true} path="/login" exact={true}>
          <Main/>
        </ProtectedRoute> 

            {/* <ProtectedRoute isAuth={state.isAuth} isAdmin={state.isAdmin} path="/moder" exact={true}>
          <SearchPage />
        </ProtectedRoute> */}

            {/* <ProtectedRoute isAuth={state.isAuth} isAdmin={state.isAdmin} path="/profile" exact={true}>
          <Profile />
        </ProtectedRoute>  */}
          </Switch>
        </div>

        <Footer />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
