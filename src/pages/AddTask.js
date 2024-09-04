import React, { useState } from 'react';
import { Container, TextField, Button, MenuItem, Typography, Paper, Grid } from '@mui/material';
import axios from 'axios';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [taskCategory, setTaskCategory] = useState('');
  const [automations, setAutomations] = useState(false);

  const categories = ['Tarefas', 'Bug', 'Melhoria', 'Feature'];

  const handleSubmit = () => {
    const task = { name: taskName, category: taskCategory, automations };
    axios.post('/api/tasks', task)
      .then(response => {
        console.log('Tarefa criada com sucesso:', response.data);
        setTaskName('');
        setTaskCategory('');
        setAutomations(false);
      })
      .catch(error => console.error('Erro ao criar tarefa:', error));
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Criar Nova Tarefa
      </Typography>
      <Paper style={{ padding: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Nome da Tarefa"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Categoria"
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
              fullWidth
            >
              {categories.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
              Criar Tarefa
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AddTask;
