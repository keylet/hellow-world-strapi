import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Reemplaza la URL con la de tu instancia de Strapi
    axios.get('https://worthy-wisdom-8a25876352.strapiapp.com/api/messages')
      .then(response => {
        setMessage(response.data.data[0].HelloWorld);
      })
      .catch(error => {
        console.error('Error fetching message:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>{message ? message : "Loading..."}</h1>
    </div>
  );
}

export default App;
