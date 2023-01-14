import React, {FC} from 'react';
import Profile from '../../pages/Profile/Profile';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './App.module.css';


const App:FC = () => {

  return (
    <div className={styles.page}>
      <Header/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;
