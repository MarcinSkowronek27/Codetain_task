import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
// import PropTypes from 'prop-types';
import { aboutData } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={aboutData.title} image={aboutData.image} />
    {/* <h2>Info</h2> */}
    <p>{aboutData.text}</p>
  </Container>
);

// Info.propTypes = {
//   image: PropTypes.node,
// };

export default Info;