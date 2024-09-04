import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/tasks')
      .then(response => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar tarefas:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: '30px' }}>
      <Typography variant="h4" gutterBottom>
        Gerenciamento de Tarefas
      </Typography>
      {loading ? <CircularProgress /> : (
        <List>
          {tasks.map(task => (
            <ListItem key={task.id}>
              <ListItemText 
                primary={task.title} 
                secondary={`Responsável: ${task.assignee} | Prazo: ${task.deadline} | Prioridade: ${task.priority}`} 
              />
              <Button variant="contained" color="primary" onClick={() => navigate(`/task/${task.id}`)}>
                Editar
              </Button>
            </ListItem>
          ))}
        </List>
      )}
      <Button variant="contained" color="primary" onClick={() => navigate('/addTask')}>
        Adicionar Nova Tarefa
      </Button>
    </Container>
  );
}

export default Tasks;
