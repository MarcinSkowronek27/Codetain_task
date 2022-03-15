import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import ListHobby from '../ListHobby/ListHobby';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    lists: PropTypes.array,
    subtitle: PropTypes.node,
  }

  render() {
    const { title, lists, subtitle } = this.props;
    return (
      <main className={styles.component}>
        <section className={styles.splash}>
          <div className={styles.splash_inner}>
            <h1 className={styles.title}>{title}</h1>
          </div>
        </section>
        <h1 className={styles.subtitle}>{subtitle}</h1>
        <section className={styles.lists}>
          {lists.map(listData => (
            <ListHobby key={listData.id} {...listData} />
          ))}
        </section>
      </main>
    );
  }
}

export default Home;
