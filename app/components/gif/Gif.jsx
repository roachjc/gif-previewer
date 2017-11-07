import React from 'react';
import PropTypes from 'prop-types';

const Gif = ({ src }) => (
  <img className="gif" alt="" src={src} />
);

export default Gif;

Gif.propTypes = {
  src: PropTypes.string.isRequired,
};
