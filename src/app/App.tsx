import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import TopLine from 'components/TopLine';
import { HashRouter } from 'react-router-dom';
import { Routes } from './routes';
import LastLine from 'components/LastLine';
import styles from './App.module.scss'
import { ThemeProvider } from '@material-ui/core';


import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#fff',
      dark: '#969696',
      contrastText: '#000',
    }
  },
});


const App = () => {
  return (
    //hashrouter only for gh-pages
    <HashRouter>
      <ThemeProvider theme={theme}>
        <div className={styles.root}>
          <TopLine />
          <Header />
          <main className={styles.main}>
            <Routes />
          </main>
          <Footer />
          <LastLine />
        </div >
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
