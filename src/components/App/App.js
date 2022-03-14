import React from 'react';
// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Home from '../Home/HomeContainer';
import About_me from '../About_me/About-me';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import styles from './App.scss';
import { AnimatedSwitch } from 'react-router-transition';
import { parse } from 'react-router-transition';
import Film from '../Film/FilmContainer';

export default function App() {

  const url = "https://swapi.dev/api/films/";

  const [parsedResponse, setParseResponse] = useState(null);

  useEffect(() => {
    const request = fetch(url);
    const parseServerResponse = request.then(function (rawResponse) {
      return rawResponse.json();
    });
    parseServerResponse.then(function (parsedResponse) {
      setParseResponse(parsedResponse);
    });
  });
  // console.log(parsedResponse);
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


// App.propTypes = {
//   component: PropTypes.func,
// };

// export default App;