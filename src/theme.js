import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#041b33', // Cor primária personalizada
    },
    secondary: {
      main: '#ff4081', // Cor secundária complementar
    },
    background: {
      default: '#f4f6f8', // Cor de fundo padrão
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 600,
      color: '#041b33',
    },
    h5: {
      fontWeight: 500,
      color: '#041b33',
    },
    body1: {
      color: '#555555',
    },
  },
});

export default theme;
