import React, {FC} from 'react';
import Profile from '../../pages/Profile/Profile';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './App.module.css';
import { Switch, Route } from "react-router-dom";


const App:FC = () => {

  return (
    <div className={styles.page}>
      <Header/>
      <Switch>
        <Route path="/profile" exact={true}>
          <Profile/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
