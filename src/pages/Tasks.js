import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Grid, Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Tarefa 1',
      sla: '24 horas',
      status: 'Em Progresso',
      priority: 'Alta',
      history: []
    },
    {
      id: 2,
      name: 'Tarefa 2',
      sla: '48 horas',
      status: 'Pendente',
      priority: 'Média',
      history: []
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // Automação de Status
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTasks = tasks.map((task) => {
        if (task.status === 'Em Progresso') {
          return {
            ...task,
            status: 'Concluído',
            history: [...task.history, `Status alterado para Concluído em ${new Date().toLocaleString()}`]
          };
        }
        return task;
      });
      setTasks(updatedTasks);
      toast.success('Tarefas atualizadas automaticamente!');
    }, 60000);
    return () => clearInterval(interval);
  }, [tasks]);

  const handleApprovalRequest = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: 'Aguardando Aprovação' };
      }
      return task;
    });
    setTasks(updatedTasks);
    toast.info('Aprovação solicitada.');
  };

  const handleStatusChange = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          status: newStatus,
          history: [...task.history, `Status alterado para ${newStatus} em ${new Date().toLocaleString()}`]
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.priority.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Paper elevation={6} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>Tarefas</Typography>
        <TextField
          label="Buscar tarefas"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <Grid container spacing={2}>
          {filteredTasks.map((task) => (
            <Grid item xs={12} key={task.id}>
              <Paper elevation={3} style={{ padding: '15px' }}>
                <Typography variant="h6">{task.name}</Typography>
                <Typography>SLA: {task.sla}</Typography>
                <Typography>Status: {task.status}</Typography>
                <Typography>Prioridade: {task.priority}</Typography>

                {/* Histórico */}
                <Typography variant="body2" style={{ marginTop: '10px' }}>Histórico:</Typography>
                {task.history.map((event, index) => (
                  <Typography key={index} variant="body2" style={{ marginLeft: '15px' }}>- {event}</Typography>
                ))}

                {/* Botões de Ação */}
                {task.status === 'Aguardando Aprovação' ? (
                  <Typography color="secondary">Aguardando Aprovação</Typography>
                ) : (
                  <Button variant="contained" color="primary" onClick={() => handleApprovalRequest(task.id)} style={{ marginTop: '10px' }}>
                    Solicitar Aprovação
                  </Button>
                )}
                <Button variant="contained" color="secondary" onClick={() => handleStatusChange(task.id, 'Concluído')} style={{ marginLeft: '10px', marginTop: '10px' }}>
                  Marcar como Concluído
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Tasks;
