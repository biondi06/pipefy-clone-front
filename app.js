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
import Header from './components/Header';  // Header adicionado
import Footer from './components/Footer';  // Footer adicionado
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css'; // Certifique-se que este caminho está correto

const theme = createTheme({
  palette: {
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
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* CSS global */}
      <Router>
        <Header />
        <div style={{ paddingTop: '60px', paddingBottom: '80px' }}>
          <Routes>
            <Route
              path="/"
              element={
                <CSSTransition in={true} timeout={300} classNames="fade">
                  <Home />
                </CSSTransition>
              }
            />
            <Route
              path="/tasks"
              element={
                <CSSTransition in={true} timeout={300} classNames="fade">
                  <Tasks />
                </CSSTransition>
              }
            />
            <Route
              path="/add-task"
              element={
                <CSSTransition in={true} timeout={300} classNames="fade">
                  <AddTask />
                </CSSTransition>
              }
            />
            <Route
              path="/automations"
              element={
                <CSSTransition in={true} timeout={300} classNames="fade">
                  <Automations />
                </CSSTransition>
              }
            />
            <Route
              path="/dashboard"
              element={
                <CSSTransition in={true} timeout={300} classNames="fade">
                  <Dashboard />
                </CSSTransition>
              }
            />
            <Route
              path="/edit-task/:id"
              element={
                <CSSTransition in={true} timeout={300} classNames="fade">
                  <EditTask />
                </CSSTransition>
              }
            />
            <Route
              path="/forms"
              element={
                <CSSTransition in={true} timeout={300} classNames="fade">
                  <Forms />
                </CSSTransition>
              }
            />
            <Route
              path="/report"
              element={
                <CSSTransition in={true} timeout={300} classNames="fade">
                  <Report />
                </CSSTransition>
              }
            />
            <Route
              path="/task-details/:id"
              element={
                <CSSTransition in={true} timeout={300} classNames="fade">
                  <TaskDetails />
                </CSSTransition>
              }
            />
            <Route
              path="/teams"
              element={
                <CSSTransition in={true} timeout={300} classNames="fade">
                  <Teams />
                </CSSTransition>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
