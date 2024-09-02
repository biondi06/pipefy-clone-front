import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <Router>
          <NavBar />
          <Routes>
            {/* Rotas */}
          </Routes>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
