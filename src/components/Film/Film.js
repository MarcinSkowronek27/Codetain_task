import React from 'react';
import styles from './Film.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';

const Film = ({ episode_id, id, title, director, producer, release_date, opening_crawl, ...props }) => {
  // console.log(props.match.params.id);
  // console.log(test);

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
    // console.log('pars', parsedResponse);
  });

  return (
    <Container>
      <section className={styles.component}>
        {parsedResponse === null ?
          <div>Wait for loading data...</div> :
          <>
            <div>{parsedResponse.title}</div>
            <div>{parsedResponse.director}</div>
          </>
        }
      </section>
    </Container>
  )
};

Film.propTypes = {
  episode_id: PropTypes.string,
  title: PropTypes.node.string,
  director: PropTypes.node.string,
};

export default Film;


