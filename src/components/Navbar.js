import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ styleContent, styleUl }) {
  return (
    <nav className={ styleContent }>
      <ul className={ styleUl }>
        <li className="hover:underline"><a href="/">PERFUME INFANTIL</a></li>
        <li className="hover:underline"><a href="/">SABONETES</a></li>
        <li className="hover:underline"><a href="/">PÓS-BANHO</a></li>
        <li className="hover:underline"><a href="/">ASSADURAS</a></li>
        <li className="hover:underline"><a href="/">HIDRATANTES</a></li>
        <li className="hover:underline"><a href="/">LENÇOS UMEDECIDOS</a></li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  styleContent: PropTypes.string.isRequired,
  styleUl: PropTypes.string.isRequired,
}

export default Navbar;
