import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import api from '../api/axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/tasks/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setDescription(response.data.description);
      })
      .catch(error => {
        console.error('Erro ao buscar tarefa:', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.put(`/tasks/${id}`, { title, description })
      .then(() => {
        navigate('/tasks');  // Redireciona de volta para a página de tarefas
      })
      .catch(error => {
        console.error('Erro ao editar tarefa:', error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Editar Tarefa
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
          Salvar Alterações
        </Button>
      </form>
    </Container>
  );
}

export default EditTask;
