// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// Configurações do Firebase (Substitua pelos valores do seu projeto)
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o serviço de mensagens
const messaging = getMessaging(app);

// Função para solicitar permissão para notificações
export const requestNotificationPermission = async () => {
  try {
    const token = await getToken(messaging, { vapidKey: 'YOUR_PUBLIC_VAPID_KEY' });
    if (token) {
      console.log('Token de notificação:', token);
    } else {
      console.error('Nenhum token de notificação encontrado');
    }
  } catch (error) {
    console.error('Erro ao obter permissão de notificação:', error);
  }
};

// Função para capturar mensagens em tempo real
onMessage(messaging, (payload) => {
  console.log('Mensagem recebida:', payload);
});

export default app;
