import React from 'react'
import PropTypes from 'prop-types';

function FavoritesCard(props) {
  const { image, title, price, classification } = props;
  return (
    <div className="block justify-center w-72 bg-white m-2 h-96">
      <img className="w-72" src={ image } alt={ title } />
      <h4 className="p-1 mt-2">{ title }</h4>
      <h5 className="mb-3 text-tertiary-color">{ price }</h5>
      <img className="justify-center flex w-28 m-auto" src={ classification } alt="clasification" />
    </div>
  );
}

FavoritesCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  classification: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};


export default FavoritesCard;
