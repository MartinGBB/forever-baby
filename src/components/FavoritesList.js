import React from 'react'
import PropTypes from 'prop-types';
import FavoriteCard from './FavoriteCard';

function FavoritesList({ favorites }) {
  return (
    <div>
      {
        favorites.map(({ image, title, price, classification }, i) => (
          <FavoriteCard
            key={ i }
            image={ image }
            title={ title }
            price={ price }
            classification={ classification }
          />
        ))
      }
    </div>
  );
}

FavoritesList.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default FavoritesList;
