import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import AddTask from './pages/AddTask';
import Automations from './pages/Automations';
import Dashboard from './pages/Dashboard';
import EditTask from './pages/EditTask';
import Forms from './pages/Forms';
import Report from './pages/Report';
import TaskDetails from './pages/TaskDetails';
import Teams from './pages/Teams';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#041b33', // Cor principal do tema
    },
    secondary: {
      main: '#f50057', // Cor secundária para destaques
    },
    background: {
      default: '#f4f6f8', // Cor de fundo
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Tipografia padrão
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Botões com cantos arredondados
          textTransform: 'none', // Remover o texto em caixa alta
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Define o CSS global */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={300}>
                  <Home />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          {/* Rotas das outras páginas */}
          <Route
            path="/tasks"
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={300}>
                  <Tasks />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/add-task"
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={300}>
                  <AddTask />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/automations"
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={300}>
                  <Automations />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/dashboard"
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={300}>
                  <Dashboard />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/edit-task/:id"
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={300}>
                  <EditTask />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/forms"
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={300}>
                  <Forms />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/report"
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={300}>
                  <Report />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/task-details/:id"
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={300}>
                  <TaskDetails />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/teams"
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={300}>
                  <Teams />
                </CSSTransition>
              </TransitionGroup>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
