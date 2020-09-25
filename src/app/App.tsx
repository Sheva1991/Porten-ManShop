import React from 'react';
import Header from 'features/Header';
import Footer from 'features/Footer';
import TopLine from 'features/TopLine';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import LastLine from 'features/LastLine';
import styles from './App.module.scss'



const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.root}>
        <TopLine />
        <Header />
        <main className={styles.main}>
          <Routes />
        </main>
        <Footer />
        <LastLine />
      </div >
    </BrowserRouter>
  );
}

export default App;
