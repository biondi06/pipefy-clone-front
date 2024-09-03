import React, { useState, useEffect } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: '', description: '' });

  useEffect(() => {
    api.get(`/tasks/${id}`).then((response) => {
      setTask(response.data);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/tasks/${id}`, task);
      navigate('/tasks');
    } catch (error) {
      console.error('Erro ao editar tarefa:', error);
    }
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
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          margin="normal"
          required
        />
        <TextField
          label="Descrição"
          fullWidth
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          margin="normal"
          multiline
          rows={4}
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
