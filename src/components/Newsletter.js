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
  <div>
      <input
        name="email"
        placeholder="Digite aqui o seu melhor e-mail"
        value={ email }
        className="p-3 m-auto self-center inline desktop:w-128 desktop:h-12 phone:w-20 h-7"
        onChange={ ({ target: { value } }) => setEmail(value) }
        />
      <button
        type="button"
        className="bg-white m-auto inline phone: p-3 w-20"
        onClick={ handleFetch }
      >
        CADASTRAR
      </button>
      <p>{ res }</p>
    </div>
  );
}

export default Newsletter;
