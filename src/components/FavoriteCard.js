import React, { useState } from 'react'
import shoppingCart from '../images/shopping-cart.png';
import PropTypes from 'prop-types';

function FavoritesCard(props) {
  const [buy, setBuy] = useState("");
  const handdleBuys = () => {
    if (buy === "") {
      return setBuy("Seu produto foi adicionado ao carrinho");
    }
    return setBuy("")
  };
  
  const timeout = () => {
    if (buy !== "") return setBuy("")
  };
  setTimeout(timeout, 2000);

  const { image, title, price, classification } = props;
  return (
    <div className="block justify-center w-72 bg-white m-2 h-96 border-b-4 border-b-secondary-color">
      <p className="bg-[#ff8800bb] text-white  ml-1 pt-1 pb-1 mt-40 absolute rounded-lg">{ buy }</p>
      <a href="/"><img className="w-72 h-15" src={ image } alt={ title } /></a>
      <a href="/"><h4 className="p-1 mt-2 text-quaternary-color">{ title }</h4></a>
      <h5 className="mb-3 text-tertiary-color">{ price }</h5>
      <img className="justify-center flex w-28 m-auto" src={ classification } alt="clasification" />
      <button
        type="button"
        className="w-64 h-11 flex p-2 m-auto bg-[#FF8A00] text-white rounded-md mt-2"
        onClick={ handdleBuys }
      >
        <img className="m-auto" src={ shoppingCart } />
        ADICIONAR AO CARRINHO
      </button>
    </div>
  );
}

FavoritesCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  classification: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};


export default FavoritesCard;
