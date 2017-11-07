import React from 'react';
import PropTypes from 'prop-types';

const Frames = ({ images }) => {
  const frames = images.map((imgURL, i) => (
    <div key={imgURL}>
      <img className="preview" src={imgURL} alt={`preview ${i}`} />
    </div>
  ));

  return (
    <div>
      <h2>Frames</h2>
      <div className="img-wrapper">
        {frames}
      </div>
    </div>
  );
};

export default Frames;

Frames.propTypes = {
  images: PropTypes.array.isRequired,
};
