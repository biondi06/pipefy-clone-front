// src/components/NotificationSystem.js

import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationSystem = () => {
  const notifySuccess = () => toast.success('Operação realizada com sucesso!');
  const notifyError = () => toast.error('Algo deu errado!');
  const notifyInfo = () => toast.info('Informação importante.');

  return (
    <div>
      <button onClick={notifySuccess}>Notificação de Sucesso</button>
      <button onClick={notifyError}>Notificação de Erro</button>
      <button onClick={notifyInfo}>Notificação de Informação</button>
    </div>
  );
};

export default NotificationSystem;
