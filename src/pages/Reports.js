import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Container, Typography } from '@mui/material';
import api from '../api/axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Reports() {
  const [taskData, setTaskData] = useState([]);
  const [automationData, setAutomationData] = useState([]);

  useEffect(() => {
    api.get('/tasks')
      .then(response => {
        setTaskData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar tarefas:', error);
      });

    api.get('/automations')
      .then(response => {
        setAutomationData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar automações:', error);
      });
  }, []);

  const taskChartData = {
    labels: taskData.map(task => task.title),
    datasets: [
      {
        label: 'Tarefas Concluídas',
        data: taskData.map(task => task.completed ? 1 : 0),
        backgroundColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const automationChartData = {
    labels: automationData.map(automation => automation.name),
    datasets: [
      {
        label: 'Automations Criadas',
        data: automationData.map(() => 1),
        backgroundColor: 'rgba(255,99,132,1)',
      },
    ],
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Relatórios e Dashboards
      </Typography>
      <div>
        <Typography variant="h5" gutterBottom>
          Tarefas Concluídas
        </Typography>
        <Bar data={taskChartData} />
      </div>
      <div style={{ marginTop: '50px' }}>
        <Typography variant="h5" gutterBottom>
          Automations Criadas
        </Typography>
        <Bar data={automationChartData} />
      </div>
    </Container>
  );
}

export default Reports;
