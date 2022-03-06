import React from 'react'
import PropTypes from 'prop-types';

function FavoritesCard(props) {
  const { image, title, price, classification } = props;
  return (
    <div className="block p-5 bg-primary-color">
      <img className="" src={ image } alt={ title } />
      <h4 className="">{ title }</h4>
      <h5 className="">{ price }</h5>
      <div>
      <p className="">{ classification }</p>
      </div>
    </div>
  );
}

FavoritesCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  classification: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};


export default FavoritesCard;
