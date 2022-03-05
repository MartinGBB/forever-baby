import React from 'react'
import PropTypes from 'prop-types';

function Input(props) {
  const { type, name, pleaceholder, disabled } = props;
  return (
    <div>
      <input
        type={ type }
        name={ name }
        placeholder={ pleaceholder }
        disabled={ disabled }
       />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pleaceholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default Input;
