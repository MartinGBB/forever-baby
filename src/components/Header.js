import React from 'react'
import Input from './Input';
import Link from './Link';
import logo from '../images/logo-forever-liss-baby.png';
import profileIcon from '../images/profile-icon.jpg';
import shoppingCar from '../images/shopping-car.png';

function Header() {
  return (
    <div className="flex self-center justify-between bg-primary-color">
      <Link
        link="/"
        image={ logo }
        alt="logo forever liss baby"
        styleContent="flex m-2 desktop:w-40 phone:w-20 ml-4 mt-4"
      />

      <Input
        type="text"
        name="filter"
        pleaceholder="Qual o mimo de hoje para o seu anjinho?"
        disabled={ false }
        style="p-3 self-center flex desktop:w-128 desktop:h-12 phone:w-48 h-7"
      />


      <Link 
        link="/"
        image={ profileIcon }
        alt="logo da conta"
        styleContent="w-11 bg-secondary-color self-center p-2 rounded-full"
      />
      <Link />
    </div>
  );
}

export default Header;
