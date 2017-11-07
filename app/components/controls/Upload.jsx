import React from 'react';
import PropTypes from 'prop-types';

const Upload = ({ handleFileInput }) => (
  <input type="file" multiple onChange={handleFileInput} />
);

export default Upload;

Upload.propTypes = {
  handleFileInput: PropTypes.func.isRequired,
};
