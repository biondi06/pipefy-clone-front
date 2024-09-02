import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import AddTask from './pages/AddTask';
import Teams from './pages/Teams';
import Automations from './pages/Automations';
import Forms from './pages/Forms';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/add" element={<AddTask />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/automations" element={<Automations />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
