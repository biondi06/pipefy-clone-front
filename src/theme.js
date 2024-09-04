import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#041b33', // Azul-escuro (conforme pedido)
    },
    secondary: {
      main: '#f50057', // Destaque
    },
    background: {
      default: '#f4f6f8', // Fundo moderno e claro
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      color: '#333',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px', // Bordas arredondadas nos botões
          textTransform: 'none', // Texto normal
        },
      },
    },
  },
});

export default theme;
