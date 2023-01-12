import React, {FC} from 'react';
import Header from '../Header/Header';
import styles from './App.module.css';


const App:FC = () => {

  return (
    <div className={styles.page}>
      <Header/>
    </div>
  );
}

export default App;
