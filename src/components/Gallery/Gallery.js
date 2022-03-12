import React from 'react';
import styles from './Gallery.scss';
import PropTypes from 'prop-types';
import Photo from '../Photo/Photo';
import { aboutData } from '../../data/dataStore';
import clsx from 'clsx';

class Gallery extends React.Component {

  static propTypes = {
    section: PropTypes.string,
    title: PropTypes.string,
    photos: PropTypes.array,
  }

  render() {
    const { section, title, photos} = this.props;
    return (
      <section className={clsx(styles.component, styles.galleryBorder)}>
        <h1 className={styles.title}>
          {section}
        </h1>
        <div className={styles.photos}>
          {photos.map(photoData => (
            <Photo key={photoData.id} {...photoData} />
          ))}
        </div>
      </section>
    );
  }
}

export default Gallery;