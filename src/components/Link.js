import React from 'react'
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

export default Link;
