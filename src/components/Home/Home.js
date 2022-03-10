import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import ListLink from '../ListLink/ListLink';
// import { pageContents/*, listData*/ } from '../../data/dataStore';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    lists: PropTypes.array,
  }
  render() {
    const { title, lists } = this.props;
    return (
      <main className={styles.component}>
        <section className={styles.splash}>
          <div className={styles.splash_inner}>
            <h1 className={styles.title}>{title}</h1>
          </div>
        </section>
        {lists.map(listData => (
          <ListLink key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default Home;
