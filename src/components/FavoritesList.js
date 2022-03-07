import React from 'react'
import PropTypes from 'prop-types';
import FavoriteCard from './FavoriteCard';

function FavoritesList({ favorites }) {
  return (
    <div className="p-5 bg-primary-color">
      <h1 className="p-5 mt-5 text-white">
        FOREVER BABY
        <span className="text-blue-900 underline underline-offset-21"> DESTAQUES</span>
      </h1>
      <div className="flex flex-wrap justify-center">
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
    </div>
  );
}

FavoritesList.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default FavoritesList;
