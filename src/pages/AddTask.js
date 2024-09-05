import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateTask = () => {
    console.log('Tarefa criada:', taskName, description);
    setTaskName('');
    setDescription('');
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Paper elevation={6} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Criar Tarefa
        </Typography>
        <TextField
          label="Nome da Tarefa"
          fullWidth
          margin="normal"
          variant="outlined"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <TextField
          label="Descrição"
          fullWidth
          margin="normal"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateTask}
          style={{ marginTop: '20px' }}
        >
          Criar
        </Button>
      </Paper>
    </Container>
  );
};

export default AddTask;
