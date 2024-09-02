import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import axios from 'axios';

function Dashboard() {
  const [image, setImage] = useState('');

  useEffect(() => {
    axios.get('https://api.unsplash.com/photos/random', {
      params: { query: 'office', client_id: 'YOUR_UNSPLASH_ACCESS_KEY' },
    })
      .then(response => {
        setImage(response.data.urls.regular);
      })
      .catch(error => {
        console.error('Erro ao buscar imagem:', error);
      });
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5">Bem-vindo ao Sistema</Typography>
              <img src={image} alt="Office" style={{ width: '100%', height: 'auto' }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
