import React from 'react';
import styles from './ListLink.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

const ListLink = ({ title, description }) => (
  <section className={styles.component}>
    <div className={styles.text}>
      <h2 className={styles.title}>{ReactHtmlParser(title)}</h2>
      <div className={styles.description}>
        {ReactHtmlParser(description)}
      </div>
    </div>
  </section>
);

ListLink.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
};

ListLink.defaultProps = {
  description: settings.defaultListDescription,
};

export default ListLink;
