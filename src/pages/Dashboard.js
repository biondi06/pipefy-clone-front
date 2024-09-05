import React from 'react';
import { Container, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar os componentes necessários do Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Definindo os dados para o gráfico
  const data = {
    labels: ['Tarefas Concluídas', 'Tarefas Pendentes', 'Em Progresso'],
    datasets: [
      {
        label: 'Status das Tarefas',
        data: [12, 5, 8], // Exemplo de dados
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 205, 86, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Opções de configuração do gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Estatísticas das Tarefas',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Painel de Estatísticas
      </Typography>
      <Bar data={data} options={options} />
    </Container>
  );
};

export default Dashboard;
