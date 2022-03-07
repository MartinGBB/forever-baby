import React from 'react';
import PropTypes from 'prop-types';

function Footer({ contact }) {
  return (
    <div>
      {
        contact.map(({ id, image, name, link}) => {
          return (
            <div key={ id }>
              <a href={ link }>
                <img src={ image } alt={ name }/>
              </a>
            </div>
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
