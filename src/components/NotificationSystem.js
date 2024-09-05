import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifySuccess = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

const notifyError = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

const notifyInfo = (message) => {
  toast.info(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

// Exemplo de uso
const NotificationSystem = () => {
  // Você pode adicionar notificações personalizadas aqui, ou ativá-las a partir de eventos no app.
  return null;
};

export { notifySuccess, notifyError, notifyInfo };
export default NotificationSystem;
