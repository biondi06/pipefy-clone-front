import { createTheme } from '@mui/material/styles';

// Tema padrão
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#041b33',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

// Tema escuro
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#121212',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export { lightTheme, darkTheme };
