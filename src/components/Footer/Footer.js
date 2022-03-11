import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Footer.scss';
import { settings } from '../../data/dataStore';

const Footer = () => (
  <footer className={styles.page_footer}>
    <div className={styles.container}>
      <p>{settings.footerInfo}</p>
    </div>
  </footer>
);

export default Footer;