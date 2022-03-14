import React from 'react';
import styles from './FilmLink.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const FilmLink = ({ id, title }) => {
  // console.log(test);
  return (
    <Link to={`/movie/${id}`} className={styles.link}>
      <section className={styles.component}>
        <ul>
          <li>{title}</li>
        </ul>
      </section>
    </Link>
  )
};

FilmLink.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node.isRequired,
};


export default FilmLink;
