import React from 'react'
import PropTypes from 'prop-types';

function Input(props) {
  const { type, name, pleaceholder, disabled, style } = props;
  return (
    <input
      type={ type }
      name={ name }
      placeholder={ pleaceholder }
      disabled={ disabled }
      className={ style }
      />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pleaceholder: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default Input;
