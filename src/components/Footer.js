import React from 'react';
import PropTypes from 'prop-types';

function Footer({ contact }) {
  return (
    <div className="inline m-auto">
      {
        contact.map(({ id, image, name, link}) => {
          return (
            <a
              key={ id }
              href={ link }
              target="_blank"
              rel="noreferrer"
            >
              <img className="inline m-auto" src={ image } alt={ name }/>
            </a>
          )
        })
      }
    </div>
  );
}

Footer.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.object).isRequired,

}

export default Footer;
