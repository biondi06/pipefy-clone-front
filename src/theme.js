import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#041b33',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#f4f6f8',
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
