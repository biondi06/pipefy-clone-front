import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/tasks', { title, description })
      .then(() => {
        navigate('/tasks');  // Redireciona de volta para a página de tarefas
      })
      .catch(error => {
        console.error('Erro ao adicionar tarefa:', error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Adicionar Nova Tarefa
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Título"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Descrição"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Adicionar Tarefa
        </Button>
      </form>
    </Container>
  );
}

export default AddTask;
