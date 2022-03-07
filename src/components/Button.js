import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { type, name, disabled, style } = props;
  return (
    <button
      type={ type }
      disabled={ disabled }
      className={ style }
    >
      { name }
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default Button;
