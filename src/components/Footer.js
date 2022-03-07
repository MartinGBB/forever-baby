import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import paymentMethod from "../images/paymentMethod.png";

function Footer({ contact }) {
  return (
    <div>
    <div className="bg-[#F1F1F1]">
      <h1 className="p-8 text-quaternary-color">VISITE NOSSAS REDES SOCIAIS</h1>
      {
        contact.map(({ id, image, name, link}) => {
          return (
            <a
              key={ id }
              href={ link }
              target="_blank"
              rel="noreferrer"
            >
              <img className="inline m-auto mt-3 p-1" src={ image } alt={ name }/>
            </a>
          )
        })
      }
      <Navbar
        styleContent="p-2 w-auto m-auto mt-5 mb-5"
        styleUl="flex m-8 justify-around flex-wrap text-quaternary-color"
      />
      <div className="mb-5">
        <h1 className="text-quaternary-color">FORMAR DE PAGAMENTO</h1>
        <img className="m-auto pb-2" src={ paymentMethod } alt="Forma de pagamento"/>
      </div>
    </div>
          <div className="bg-white w-auto m-2 pl-36 pr-36 mb-8">
          <span >
            <p>2022 www.foreverliss.com.br</p>
            <p>Todos os direitos reservados.</p>
            <p>
              Proibida reprodução total ou parcial. IMPORTANTE! Os preços e estoque sujeitos a alterações e podem variar sem aviso prévio. Em caso de divergência no valor do produto, irá prevalecer sempre o valor do carrinho de compras.
              FOREVER COMPANY COSMETICOS LTDA / www.foreverliss.com.br / Rua José Bonifácio, N° 690 Lençóis Paulista - SP Cep: 18683-420 | CNPJ: 08.958.817/0001-89 | Inscrição Estadual: 416.118.979.112
            </p>
          </span>
        </div>
    </div>
  );
}

Footer.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Footer;
