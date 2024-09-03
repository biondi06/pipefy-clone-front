import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
      <CssBaseline />
      <Router>
        <Routes>
          {/* Força redirecionamento de qualquer rota para Home */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/automations" element={<Automations />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit-task/:id" element={<EditTask />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/report" element={<Report />} />
          <Route path="/task-details/:id" element={<TaskDetails />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
