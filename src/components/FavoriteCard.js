import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

function FavoritesCard(props) {
  const { image, title, price, classification } = props;
  return (
    <div className="block justify-center w-72 bg-white m-2 h-96 border-b-4 border-b-secondary-color">
      <img className="w-72 h-15" src={ image } alt={ title } />
      <h4 className="p-1 mt-2">{ title }</h4>
      <h5 className="mb-3 text-tertiary-color">{ price }</h5>
      <img className="justify-center flex w-28 m-auto" src={ classification } alt="clasification" />
      <Button
        type="button"
        disabled={ false }
        style="w-56 h-9 bg-[#FF8A00] text-white rounded-md mt-2"
        name="Adicionar"
      />
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
