import React, { useState } from 'react'
import Input from './Input';
import Link from './Link';
import logo from '../images/logo-forever-liss-baby.png';
import profileIcon from '../images/profile-icon.jpg';
import shoppingCart from '../images/shopping-cart.png';
import Button from './Button';
import Navbar from './Navbar';

function Header() {

  const [hidden, setHidden] = useState('hidden');

  const handleHidden = () => {
    hidden === 'hidden' ? setHidden("none") : setHidden('hidden');
  }
  handleHidden
  return (
    <div>
      <div className="flex self-center justify-between bg-primary-color">
        <button
          type="button"
          className="desktop:hidden ml-2"
          onClick={ handleHidden }
        >
        menu
      </button>
        <Link
          link="/"
          image={ logo }
          alt="forever liss baby"
          styleContent="flex m-2 desktop:w-40 phone:w-20 ml-4 mt-4"
        />
        <div className="flex self-center desktop:w-128 desktop:h-12 phone:w-48 h-7">
          <Input
            type="text"
            name="filter"
            pleaceholder="Qual o mimo de hoje para o seu anjinho?"
            disabled={ false }
            style="p-3 self-center flex desktop:w-128 desktop:h-12 phone:w-20 h-7"
          />

          <Button
            type="button"
            name="BUSCAR"
            disabled={ false }
            style="bg-white p-3 phone: p-0 w-20"
          />
        </div>

        <div className="justify-around flex mr-5 w-40">
          <Link 
            link="/"
            image={ profileIcon }
            alt="perfil"
            styleContent="w-11 bg-secondary-color self-center p-2 rounded-full"
          />
          <Link 
            link="/"
            image={ shoppingCart }
            alt="carrinho de compras"
            styleContent="w-11 bg-secondary-color self-center p-2 rounded-full"
          />
        </div>
      </div>
        <nav className={ `${ hidden } z-10 fixed text-white` }>
          <ul className="bg-secondary-color text-left p-4 rounded-br-lg">
            <li className="hover:underline"><a href="/">PERFUME INFANTIL</a></li>
            <li className="hover:underline"><a href="/">SABONETES</a></li>
            <li className="hover:underline"><a href="/">PÓS-BANHO</a></li>
            <li className="hover:underline"><a href="/">ASSADURAS</a></li>
            <li className="hover:underline"><a href="/">HIDRATANTES</a></li>
            <li className="hover:underline"><a href="/">LENÇOS UMEDECIDOS</a></li>
          </ul>
      </nav>
          <Navbar
            styleContent="bg-secondary-color text-white"
            styleUl="desktop:flex desktop:justify-between p-6 phone:hidden"
          />
    </div>
  );
}

export default Header;

// icon reference: https://www.iconsdb.com/