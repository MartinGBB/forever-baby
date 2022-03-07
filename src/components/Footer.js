import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

function Footer({ contact }) {
  return (
    <div className="inline m-auto">
      <h1 className="mt-8">VISITE NOSSAS REDES SOCIAIS</h1>
      {
        contact.map(({ id, image, name, link}) => {
          return (
            <a
              key={ id }
              href={ link }
              target="_blank"
              rel="noreferrer"
            >
              <img className="inline m-auto mt-3 p-1" src={ image } alt={ name }/>
            </a>
          )
        })
      }
      <Navbar
        styleContent="p-2 w-auto m-auto mt-5 mb-5"
        styleUl="flex m-8 justify-around flex-wrap"
      />
    </div>
  );
}

Footer.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.object).isRequired,

}

export default Footer;
