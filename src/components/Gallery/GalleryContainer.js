import {connect} from 'react-redux';
import Gallery from './Gallery';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  imageSrc: state.photos,
  alterText: state.photos,
  photos: state.photos,
});

export default connect(mapStateToProps)(Gallery);