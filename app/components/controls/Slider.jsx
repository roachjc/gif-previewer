import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({ handleSetFrameRate, frameRate }) => (
  <div>
    <label htmlFor="framerate">Select Frame Rate: </label>
    <input
      type="range"
      min="1"
      max="30"
      id="framerate"
      step="1"
      onChange={handleSetFrameRate}
    />
    <span>{`${frameRate} frames per second`}</span>
  </div>
);

export default Slider;

Slider.propTypes = {
  handleSetFrameRate: PropTypes.func.isRequired,
  frameRate: PropTypes.number.isRequired,
};
