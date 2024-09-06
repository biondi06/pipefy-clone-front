import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import AddTask from './pages/AddTask';
import Dashboard from './pages/Dashboard';
import Report from './pages/Report';
import KanbanBoard from './pages/KanbanBoard';
import Forms from './pages/Forms';
import Teams from './pages/Teams';
import Approvals from './pages/Approvals';
import CalendarView from './pages/CalendarView';
import Automations from './pages/Automations';  
import NavBar from './components/NavBar';
import NotificationSystem from './components/NotificationSystem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#041b33',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: darkMode ? '#121212' : '#f4f6f8',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <NotificationSystem />
        <ToastContainer /> {/* O ToastContainer é necessário para exibir as notificações */}
        <div style={{ flex: 1, paddingTop: '50px', paddingBottom: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/report" element={<Report />} />
            <Route path="/kanban" element={<KanbanBoard />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/automations" element={<Automations />} />
          </Routes>
        </div>
        <footer style={{ backgroundColor: '#041b33', color: '#fff', textAlign: 'center', padding: '20px 0', position: 'fixed', bottom: 0, width: '100%' }}>
          Todos os direitos reservados © 2024
        </footer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
