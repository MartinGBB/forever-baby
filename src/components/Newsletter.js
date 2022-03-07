import React, { useState } from 'react';
import fetchApi from '../utils/fetch';

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleFetch = async () => {
  const endpoind = "https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php"
  const method = "POST";
  const response = fetchApi(endpoind, method, { email });
  return response;
  }

  return (
  <div>
      <input 
        name="email"
        placeholder="Digite aqui o seu melhor e-mail"
        value={ email }
        onChange={ ({ target: { value } }) => setEmail(value) }
        />
        {console.log(email)}
      <button
        type="button"
        onClick={ handleFetch }
      >
        CADASTRAR
      </button>
    </div>
  );
}

export default Newsletter;
