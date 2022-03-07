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
  setTimeout(timeout, 3000);

  return (
  <div>
      <input
        name="email"
        placeholder="Digite aqui o seu melhor e-mail"
        value={ email }
        onChange={ ({ target: { value } }) => setEmail(value) }
        />
      <button
        type="button"
        onClick={ handleFetch }
      >
        CADASTRAR
      </button>
      <p>{ res }</p>
    </div>
  );
}

export default Newsletter;
