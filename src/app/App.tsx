import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import TopLine from 'components/TopLine';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import LastLine from 'components/LastLine';
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
