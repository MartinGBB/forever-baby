import React from 'react'
import PropTypes from 'prop-types';

function FavoritesList({ favorites }) {
  return (
    <div>
    </div>
  );
}

FavoritesList.propTypes = {
  covers: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default FavoritesList;
