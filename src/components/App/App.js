import React from 'react';
import Home from '../Home/HomeContainer';
import About_me from '../About_me/About-me';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import styles from './App.scss';
import { AnimatedSwitch } from 'react-router-transition';
import Film from '../Film/Film';

export default function App() {

  return (
    <BrowserRouter>
      <MainLayout>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className={styles.switchWrapper}
        >
          <Route exact path='/' component={Home} />
          <Route exact path='/about_me' component={About_me} />
          <Route exact path='/movie/:id' component={Film}/>
        </AnimatedSwitch>
      </MainLayout>
    </BrowserRouter>
  )
};