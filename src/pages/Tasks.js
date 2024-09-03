import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch tasks from the backend
    axios.get('/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Erro ao buscar tarefas:', error));
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Gerenciamento de Tarefas
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Lista de Tarefas
            </Typography>
            <List>
              {tasks.map(task => (
                <ListItem key={task.id} button onClick={() => navigate(`/task-details/${task.id}`)}>
                  <ListItemText primary={task.title} secondary={task.status} />
                </ListItem>
              ))}
            </List>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => navigate('/add-task')} 
              style={{ marginTop: '20px' }}
            >
              Adicionar Nova Tarefa
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Tasks;
