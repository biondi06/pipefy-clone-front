import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import theme from './theme';
import NavBar from './components/NavBar';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

// Lazy load das páginas
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Tasks = lazy(() => import('./pages/Tasks'));
const AddTask = lazy(() => import('./pages/AddTask'));
const Teams = lazy(() => import('./pages/Teams'));
const Automations = lazy(() => import('./pages/Automations'));
const Forms = lazy(() => import('./pages/Forms'));
const Reports = lazy(() => import('./pages/Reports'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <Router>
          <NavBar />
          <Suspense fallback={<LoadingSpinner />}>
            <TransitionGroup>
              <CSSTransition timeout={300} classNames="fade">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/tasks" element={<Tasks />} />
                  <Route path="/tasks/add" element={<AddTask />} />
                  <Route path="/teams" element={<Teams />} />
                  <Route path="/automations" element={<Automations />} />
                  <Route path="/forms" element={<Forms />} />
                  <Route path="/reports" element={<Reports />} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          </Suspense>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
