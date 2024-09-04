import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Funções de notificação
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

export default function NotificationSystem() {
  return (
    <>
      <ToastContainer /> {/* Adicione o ToastContainer ao JSX */}
    </>
  );
}

export { notifySuccess, notifyError, notifyInfo };
