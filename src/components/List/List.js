import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Container from '../Container/Container';

class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.node,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const { title, image, description, columns } = this.props;
    return (<Container>
      <section className={styles.component}>
        <Hero titleText={title} image={image}>
        </Hero>
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
      </section>
    </Container>
    );
  }
}

export default List;
