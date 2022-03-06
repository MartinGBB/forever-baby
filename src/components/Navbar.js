import React from 'react'

function Navbar() {
  return (
    <nav className="bg-secondary-color text-white">
      <ul className="desktop:flex desktop:justify-between p-6 phone:justify-start">
        <li className="hover:underline"><a href="">PERFUME INFANTIL</a></li>
        <li className="hover:underline"><a href="">SABONETES</a></li>
        <li className="hover:underline"><a href="">PÓS-BANHO</a></li>
        <li className="hover:underline"><a href="">ASSADURAS</a></li>
        <li className="hover:underline"><a href="">HIDRATANTES</a></li>
        <li className="hover:underline"><a href="">LENÇOS UMEDECIDOS</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
