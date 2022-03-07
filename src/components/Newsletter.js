import React, { useState } from 'react';
import fetchApi from '../utils/fetch';

function Newsletter() {
  const [email, setEmail] = useState("");
  const [res, setRes] = useState("");

  const handleFetch = async () => {
  const endpoind = "https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php"
  const method = "POST";
  const request = await fetchApi(endpoind, method, { email });
  const response = request.Mensagem ? setRes(request.Mensagem) : setRes(request.Erro);
  return response;
};

  const timeout = () => {
    if (res !== "") return setRes("");
  };
  const threeSeconds = 3000;
  setTimeout(timeout, threeSeconds);

  return (
  <div className="bg-secondary-color justify-center align-center pb-9 pt-9">
    <h1 className="text-white">NEWSLETTER FOREVER BABY</h1>
    <p className="text-white mb-8">Cadastre-se agora para não perder nenhuma promoção</p>
    <div className="p-auto h-50 inline">
        <input
          name="email"
          placeholder="Digite aqui o seu melhor e-mail"
          value={ email }
          className="p-3 desktop:w-128 inline phone:w-auto"
          onChange={ ({ target: { value } }) => setEmail(value) }
          />
        <button
          type="button"
          className="bg-white p-3 inline desktop:p-3 phone:p-3"
          onClick={ handleFetch }
        >
          CADASTRAR
        </button>
        <p>{ res }</p>
      </div>
    </div>
  );
}

export default Newsletter;
