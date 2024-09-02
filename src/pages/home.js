import React, { useEffect, useState } from 'react';
import API from '../api';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    API.get('/').then(response => {
      setMessage(response.data);
    });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default Home;
