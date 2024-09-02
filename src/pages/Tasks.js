import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, CircularProgress } from '@mui/material';
import api from '../api/axios';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Gerenciamento de Tarefas
      </Typography>
      {loading ? <CircularProgress /> : (
        <List>
          {tasks.map(task => (
            <ListItem key={task.id}>
              <ListItemText primary={task.title} secondary={task.description} />
            </ListItem>
          ))}
        </List>
      )}
      <Button variant="contained" color="primary" href="/tasks/add">Adicionar Nova Tarefa</Button>
    </Container>
  );
}

export default Tasks;
