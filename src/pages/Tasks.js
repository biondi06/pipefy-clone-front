import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, CircularProgress } from '@mui/material';
import io from 'socket.io-client';
import api from '../api/axios';

const socket = io('http://localhost:3000');

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

    socket.on('taskCreated', (task) => {
      setTasks((prevTasks) => [...prevTasks, task]);
    });

    return () => {
      socket.off('taskCreated');
    };
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
