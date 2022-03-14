import React from 'react';
import styles from './ListHobby.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

const ListHobby = ({ title, description }) => (
  <section className={styles.component}>
    <div className={styles.text}>
      <h2 className={styles.title}>{ReactHtmlParser(title)}</h2>
      <div className={styles.description}>
        {ReactHtmlParser(description)}
      </div>
    </div>
  </section>
);

ListHobby.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
};

ListHobby.defaultProps = {
  description: settings.defaultListDescription,
};

export default ListHobby;
