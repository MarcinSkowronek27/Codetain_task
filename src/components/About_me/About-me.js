import React from 'react';
import Container from '../Container/Container';
import { useState, useEffect } from 'react';
import styles from './About_me.scss';
import Hero from '../Hero/Hero';
// import PropTypes from 'prop-types';
import { aboutData } from '../../data/dataStore';
import Gallery from '../Gallery/GalleryContainer';


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
      <section>
        <h2>My favourite movies:</h2>
        {parsedResponse === null ?
          null :
          <div>
            {parsedResponse.results.map((film, index) => (
              // console.log(film),
              <ul key={film.episode_id}>
                <li >{film.title}</li>
              </ul>
            )
            )}
          </div>
        }
      </section>
    </Container>
  );
}

// Info.propTypes = {
//   image: PropTypes.node,
// };

// export default About_me;