import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';

function Dashboard() {
  const [taskStats, setTaskStats] = useState({ completed: 0, pending: 0, inProgress: 0 });
  const [automationStats, setAutomationStats] = useState({ active: 0, inactive: 0 });

  useEffect(() => {
    // Fetch task statistics from the backend
    axios.get('/api/tasks/stats').then(response => {
      setTaskStats(response.data);
    });

    // Fetch automation statistics from the backend
    axios.get('/api/automations/stats').then(response => {
      setAutomationStats(response.data);
    });
  }, []);

  const taskStatusData = {
    labels: ['Concluídas', 'Pendentes', 'Em Progresso'],
    datasets: [
      {
        label: 'Tarefas',
        backgroundColor: ['#4caf50', '#ff9800', '#2196f3'],
        data: [taskStats.completed, taskStats.pending, taskStats.inProgress],
      },
    ],
  };

  const automationData = {
    labels: ['Ativas', 'Inativas'],
    datasets: [
      {
        label: 'Automations',
        backgroundColor: ['#2196f3', '#f44336'],
        data: [automationStats.active, automationStats.inactive],
      },
    ],
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Status das Tarefas
            </Typography>
            <Bar data={taskStatusData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Automations Ativas
            </Typography>
            <Pie data={automationData} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Resumo
            </Typography>
            <Typography variant="body1">Tarefas Concluídas: {taskStats.completed}</Typography>
            <Typography variant="body1">Tarefas Pendentes: {taskStats.pending}</Typography>
            <Typography variant="body1">Automations Ativas: {automationStats.active}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
