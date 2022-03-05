import React from 'react'
import Input from './Input';
import Link from './Link';
// import logo from '../images/logo-forever-liss-baby.png';

function Header() {
  return (
    <div>
      <Link />

      <Input
        type="text"
        name="filter"
        pleaceholder="Qual o mimo de hoje para o seu anjinho?"
        disabled={ false }
      />

      <Link />
      <Link />
    </div>
  );
}

export default Header;
