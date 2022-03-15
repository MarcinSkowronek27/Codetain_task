import React from 'react';
import styles from './Film.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';

const Film = ({ id, title, director, producer, release_date, opening_crawl, ...props }) => {

  const url = `https://swapi.dev/api/films/${props.match.params.id}`;

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
      <section className={styles.component}>
        {parsedResponse === null ?
          <div id={styles.wait}>Wait for loading data...</div>
          :
          <><h3>Title:</h3>
            <div>{parsedResponse.title}</div>
            <h3>Director:</h3>
            <div>{parsedResponse.director}</div>
            <h3>Producer:</h3>
            <div>{parsedResponse.producer}</div>
            <h3>Release date:</h3>
            <div>{parsedResponse.release_date}</div>
            <h3>Opening crawl:</h3>
            <div>{parsedResponse.opening_crawl}</div>
          </>
        }
      </section>
    </Container>
  )
};

Film.propTypes = {
  episode_id: PropTypes.string,
  title: PropTypes.node.func,
  director: PropTypes.node.func,
  producer: PropTypes.node.func,
  release_date: PropTypes.node.func,
  opening_crawl: PropTypes.node.func,
};

export default Film;


