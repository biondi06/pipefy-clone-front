import React from 'react';
import ReactDOM from 'react-dom/client';  // Certifique-se de que está importando de 'react-dom/client'
import App from './App';  // Importa o componente principal
import './index.css';  // Importa o CSS global

// Cria a raiz do React e renderiza o componente App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
