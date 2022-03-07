import React, { useState } from 'react';
import fetchApi from '../utils/fetch';

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleFetch = async (data) => {
  const endpoind = "https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php"
  const method = "POST";
  return fetchApi(endpoind, method, data);
  }

  return (
    <div>
      <input 
        type="email"
        name="email"
        placeholder="Digite aqui o seu melhor e-mail"
        onChange={ ({ target: value }) => setEmail(value) }
      />
    </div>
  );
}

export default Newsletter;
