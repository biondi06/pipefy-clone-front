import React, { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';

const Report = () => {
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca os dados do relatório do backend
    axios.get('/api/reports')
      .then(response => {
        setReportData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados do relatório:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
        <CircularProgress />
        <Typography variant="h6">Carregando relatório...</Typography>
      </Container>
    );
  }

  if (!reportData) {
    return (
      <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h6">Nenhum dado de relatório disponível.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>Relatório de Tarefas</Typography>
      <Typography variant="h6">Tarefas Concluídas: {reportData.completed}</Typography>
      <Typography variant="h6">Tarefas Pendentes: {reportData.pending}</Typography>
      <Typography variant="h6">Tarefas em Progresso: {reportData.inProgress}</Typography>
    </Container>
  );
};

export default Report;
