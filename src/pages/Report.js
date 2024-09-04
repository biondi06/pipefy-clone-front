import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Container, Typography } from '@mui/material';
import axios from 'axios';

const Report = () => {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    axios.get('/api/tasks/stats')
      .then(response => {
        const { completed, pending, inProgress } = response.data;
        setReportData({
          labels: ['Concluídas', 'Pendentes', 'Em Progresso'],
          datasets: [
            {
              label: 'Status das Tarefas',
              data: [completed, pending, inProgress],
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 205, 86, 0.6)',
              ],
            },
          ],
        });
      })
      .catch(error => console.error('Erro ao buscar dados do relatório:', error));
  }, []);

  if (!reportData) return <p>Carregando dados do relatório...</p>;

  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Relatórios do Sistema
      </Typography>
      <Bar data={reportData} />
    </Container>
  );
};

export default Report;
