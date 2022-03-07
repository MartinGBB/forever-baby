import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

function Footer({ contact }) {
  return (
    <div className="inline m-auto">
      <h1>VISITE NOSSAS REDES SOCIAIS</h1>
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
        styleContent="p-2 w-4/5 m-auto mt-5 mb-5"
        styleUl=" flex m-auto justify-around"
      />
    </div>
  );
}

Footer.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.object).isRequired,

}

export default Footer;
