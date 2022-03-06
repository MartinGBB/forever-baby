import React from 'react'
import PropTypes from 'prop-types';

function Favorites({ favorites }) {
  return (
    <div>
    </div>
  );
}

Favorites.propTypes = {
  covers: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default Favorites;
