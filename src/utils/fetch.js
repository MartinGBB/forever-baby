// Referens: https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

const fetchApi = async (url, method, data) => {
  const body = JSON.stringify(data);
  
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body
  };
  
  try {
    const result = await fetch(url, config);
    const resultMessage = await result.json();
    return resultMessage;
  } catch (error) {
    return error;
  }
};

export default fetchApi;
