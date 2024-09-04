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
import KanbanBoard from './pages/KanbanBoard';  // Adicionando o Kanban
import NavBar from './components/NavBar';  // Importando o NavBar
import './App.css'; // Importando o arquivo de estilos

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
        <NavBar />  {/* Adicionando o NavBar no topo */}
        <div style={{ paddingTop: '80px' }}> {/* Adicionando padding para evitar sobreposição */}
          <Routes>
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
            <Route path="/kanban" element={<KanbanBoard />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
