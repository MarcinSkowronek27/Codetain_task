import React from 'react';
import styles from './Photo.scss';
import PropTypes from 'prop-types';

const Photo = ({ imageSrc, alterText }) => (
  <section className={styles.component}>
    <img className={styles.image} src={imageSrc} alt={alterText}/>
  </section>
);

Photo.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  alterText: PropTypes.string,
};

export default Photo;