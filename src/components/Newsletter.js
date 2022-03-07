import React from 'react';
import fetchApi from '../utils/fetch';

function Newsletter() {
  const handleFetch = async (data) => {
  const endpoind = "https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php"
  const method = "POST";
  return fetchApi(endpoind, method, data);
  }

  return (
    <div>

    </div>
  );
}

export default Newsletter;
