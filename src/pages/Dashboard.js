// src/pages/Dashboard.js
import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Tarefas Concluídas', value: 24 },
  { name: 'Em Progresso', value: 12 },
  { name: 'Pendentes', value: 5 }
];

const Dashboard = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} style={{ padding: '20px' }}>
            <Typography variant="h6">Progresso de Tarefas</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={6} style={{ padding: '20px' }}>
            <Typography variant="h6">Distribuição de Tarefas</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={data} dataKey="value" outerRadius={100}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658'][index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
