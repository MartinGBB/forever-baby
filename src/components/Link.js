import React from 'react'
import PropTypes from 'prop-types';

function Link(props) {
  const { link, image, alt, style } = props;
  return (
    <div>
      <a
        href={ link }
      >
        <img
          src={ image }
          alt={ alt }
          style={ style }
        />
      </a>
    </div>
  );
}

Link.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
}

export default Link;
