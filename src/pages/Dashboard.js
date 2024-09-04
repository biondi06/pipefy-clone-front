import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Container, Typography } from '@mui/material';

// Registrando os elementos do Chart.js
Chart.register(...registerables);

const Dashboard = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['Tarefas Concluídas', 'Tarefas Pendentes', 'Em Progresso'],
    datasets: [
      {
        label: 'Status das Tarefas',
        data: [10, 5, 8],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 205, 86, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    // Destruir o gráfico anterior se ele já existir
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Estatísticas do Sistema
      </Typography>
      <Bar data={data} options={options} ref={chartRef} />
    </Container>
  );
};

export default Dashboard;
