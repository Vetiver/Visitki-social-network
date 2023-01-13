import React, {FC} from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './App.module.css';


const App:FC = () => {

  return (
    <div className={styles.page}>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
