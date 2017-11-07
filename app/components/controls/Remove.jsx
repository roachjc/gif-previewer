import React from 'react';
import PropTypes from 'prop-types';

const Remove = ({ handleRemoveAll }) => (
  <div>
    <button onClick={handleRemoveAll}>Start Over</button>
  </div>
);

export default Remove;

Remove.propTypes = {
  handleRemoveAll: PropTypes.func.isRequired,
};
