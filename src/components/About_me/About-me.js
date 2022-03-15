import React from 'react';
import Container from '../Container/Container';
import { useState, useEffect } from 'react';
import styles from './About_me.scss';
import Hero from '../Hero/Hero';
// import PropTypes from 'prop-types';
import { aboutData } from '../../data/dataStore';
import Gallery from '../Gallery/GalleryContainer';
import FilmLink from '../FilmLink/FilmLink';


export default function About_me() {

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

  return (
    <Container>
      <h1 className={styles.header}>{aboutData.name}</h1>
      <section className={styles.gallerySection}>
        {aboutData.description}
      </section>
      <Gallery section={aboutData.section} />
      <section className={styles.techSection}>
        <h2>My technologies:</h2>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Webpack</li>
          <li>Jest</li>
          <li>Jira</li>
        </ul>
      </section>
      <section className={styles.films}>
        <h2>Favourite movies:</h2>
        {parsedResponse === null ?
          <div>Loading movies list...</div> :
          <div>
            {parsedResponse.results.map((film, index) => (
              <FilmLink key={index} id={(index+1)} {...film}/>
            )
            )}
          </div>
        }
      </section>
    </Container>
  );
}