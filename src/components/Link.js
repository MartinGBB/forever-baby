import React from 'react'
import PropTypes from 'prop-types';

function Link(props) {
  const { link, image, alt, styleContent } = props;
  return (
    <div className={ styleContent }>
      <a
        href={ link }
        >
        <img
          src={ image }
          alt={ alt }
        />
      </a>
    </div>
  );
}

Link.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  styleContent: PropTypes.string.isRequired,
}

export default Link;
