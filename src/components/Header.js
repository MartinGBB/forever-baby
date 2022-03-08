import React, { useState } from 'react'
import Link from './Link';
import logo from '../images/logo-forever-liss-baby.png';
import profileIcon from '../images/profile-icon.jpg';
import shoppingCart from '../images/shopping-cart.png';
import menu from '../images/menu.png';
import Navbar from './Navbar';

function Header() {

  const [hidden, setHidden] = useState('hidden');
  const [disable, setDisable] = useState(false);
  const [valueInput, setValueInput] = useState('');

  const handleHidden = () => {
    hidden === 'hidden' ? setHidden("none") : setHidden('hidden');
  }

  const handdleButton = () => {
    // reference: https://pt.stackoverflow.com/questions/342605/verificar-a-exist%C3%AAncia-de-caracteres-especiais-em-uma-string-utilizando-regexp
    const regex = /\W|_/;
    const testCharacter = regex.test(valueInput);
    if (testCharacter || valueInput.length < 3) return setDisable(true);
    return setDisable(false);
  }
  return (
    <div>
      <div className="flex self-center justify-between bg-primary-color">
        <div className="flex mr-2 ml-1">
        <button
          type="button"
          className="desktop:hidden ml-2"
          onClick={ handleHidden }
        >
          <img src={ menu } />
        </button>
        <Link
          link="/"
          image={ logo }
          alt="forever liss baby"
          styleContent="flex m-2 desktop:w-40 phone:w-20 ml-4 mt-4"
        />
        </div>
        <div className="phone:hidden desktop:flex self-center">
          <input
              type="text"
              name="filter"
              pleaceholder="Qual o mimo de hoje para o seu anjinho?"
              value={ valueInput }
              onChange={ ({ target: { value } }) => setValueInput(value) }
              className="p-3 self-center flex w-128 h-12"
            />

            <button
              type="submit"
              disabled={ disable }
              onClick={ handdleButton }
              className="bg-white p-3 text-quaternary-color"
            >
              BUSCAR
            </button>
        </div>

        <div className="justify-around flex w-32">
          <Link 
            link="/"
            image={ profileIcon }
            alt="perfil"
            styleContent="w-10 bg-secondary-color self-center p-2 rounded-full"
          />
          <Link 
            link="/"
            image={ shoppingCart }
            alt="carrinho de compras"
            styleContent="w-10 bg-secondary-color self-center p-2 rounded-full"
          />
        </div>
      </div>
        <nav className={ `${ hidden } z-10 absolute text-white` }>
          <ul className="bg-[#f5717ed7] text-left p-4 rounded-br-lg">
            <li className="p-2 hover:underline"><a href="/">PERFUME INFANTIL</a></li>
            <li className="p-2 hover:underline"><a href="/">SABONETES</a></li>
            <li className="p-2 hover:underline"><a href="/">PÓS-BANHO</a></li>
            <li className="p-2 hover:underline"><a href="/">ASSADURAS</a></li>
            <li className="p-2 hover:underline"><a href="/">HIDRATANTES</a></li>
            <li className="p-2 hover:underline"><a href="/">LENÇOS UMEDECIDOS</a></li>
          </ul>
      </nav>
          <Navbar
            styleContent="bg-secondary-color text-white"
            styleUl="desktop:flex desktop:justify-between p-6 phone:hidden"
          />

      <div className="m-auto flex desktop:hidden">
        <input
          type="text"
          name="filter"
          pleaceholder="Qual o mimo de hoje para o seu anjinho?"
          value={ valueInput }
          onChange={ ({ target: { value } }) => setValueInput(value) }
          className="p-3 self-center flex w-128 h-12"
        />

        <button
          type="submit"
          disabled={ disable }
          onClick={ handdleButton }
          className="bg-white p-3 text-quaternary-color"
        >
          BUSCAR
        </button>
      </div>
    </div>
  );
}

export default Header;

// icons reference: https://www.iconsdb.com/