import React from 'react';
import PropTypes from 'prop-types';

const Play = ({ runGif, toggleRunGif }) => {
  const playStop = runGif
  ? 'stop'
  : 'play';

  return (
    <div>
      <button onClick={toggleRunGif}>{playStop}</button>
    </div>
  );
};

export default Play;

Play.propTypes = {
  runGif: PropTypes.bool.isRequired,
  toggleRunGif: PropTypes.func.isRequired,
};
