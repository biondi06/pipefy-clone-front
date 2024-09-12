// src/components/NotificationSystem.js
import React, { useEffect } from 'react';
import { requestNotificationPermission } from '../firebase'; // Certifique-se de ajustar o caminho corretamente

const NotificationSystem = () => {
  useEffect(() => {
    // Solicita permissão para notificações quando o componente é montado
    requestNotificationPermission();
  }, []);

  return <div>Notificações configuradas</div>;
};

export default NotificationSystem;
