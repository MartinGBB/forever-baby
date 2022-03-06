import React from 'react'

function Navbar() {
  return (
    <nav className="bg-secondary-color text-white">
      <ul className="desktop:flex desktop:justify-between p-6 phone:hidden phone:justify-start">
        <li><a href="">PERFUME INFANTIL</a></li>
        <li><a href="">SABONETES</a></li>
        <li><a href="">PÓS-BANHO</a></li>
        <li><a href="">ASSADURAS</a></li>
        <li><a href="">HIDRATANTES</a></li>
        <li><a href="">LENÇOS UMEDECIDOS</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
