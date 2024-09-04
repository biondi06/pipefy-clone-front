import React, { useEffect } from 'react';  // Remova 'useState' se não for utilizado
import { Container, Typography } from '@mui/material';
import axios from 'axios';

function Report() {
  useEffect(() => {
    axios.get('/api/report')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.error('Erro ao carregar o relatório:', error));
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Relatórios
      </Typography>
      <Typography variant="body1">
        Em breve, você poderá visualizar os relatórios aqui.
      </Typography>
    </Container>
  );
}

export default Report;
