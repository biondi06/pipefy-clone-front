// src/pages/Report.js

import React, { useState } from 'react';
import { Container, Paper, Typography, Grid, Button, TextField, Select, MenuItem } from '@mui/material';
import { toast } from 'react-toastify';
import { Parser } from 'json2csv';  // Biblioteca para exportação CSV

const Report = () => {
  const [filters, setFilters] = useState({
    dateRange: '',
    status: '',
    team: ''
  });

  const [reportData, setReportData] = useState([]);

  const handleGenerateReport = () => {
    // Simulação de dados com base nos filtros aplicados
    const mockData = [
      { id: 1, task: 'Tarefa 1', status: 'Concluído', team: 'Equipe A', date: '2024-08-01' },
      { id: 2, task: 'Tarefa 2', status: 'Em Progresso', team: 'Equipe B', date: '2024-08-03' },
      { id: 3, task: 'Tarefa 3', status: 'Pendente', team: 'Equipe C', date: '2024-08-05' },
    ];

    const filteredData = mockData.filter((report) => {
      const filterByStatus = filters.status ? report.status === filters.status : true;
      const filterByTeam = filters.team ? report.team === filters.team : true;
      const filterByDate = filters.dateRange ? report.date === filters.dateRange : true;
      return filterByStatus && filterByTeam && filterByDate;
    });

    if (filteredData.length > 0) {
      setReportData(filteredData);
      toast.success('Relatório gerado com sucesso!');
    } else {
      setReportData([]);
      toast.error('Nenhum dado encontrado para os filtros aplicados.');
    }
  };

  // Função para exportar o relatório para CSV
  const handleExportCSV = () => {
    if (reportData.length === 0) {
      toast.error('Nenhum dado disponível para exportar!');
      return;
    }

    const csvFields = ['task', 'status', 'team', 'date'];
    const json2csvParser = new Parser({ csvFields });
    const csv = json2csvParser.parse(reportData);

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'relatorio.csv';
    link.click();
    toast.success('Relatório exportado como CSV!');
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Paper elevation={6} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Gerar Relatório
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Intervalo de Datas"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={filters.dateRange}
              onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Select
              fullWidth
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              displayEmpty
            >
              <MenuItem value="">Todos os Status</MenuItem>
              <MenuItem value="Concluído">Concluído</MenuItem>
              <MenuItem value="Em Progresso">Em Progresso</MenuItem>
              <MenuItem value="Pendente">Pendente</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Select
              fullWidth
              value={filters.team}
              onChange={(e) => setFilters({ ...filters, team: e.target.value })}
              displayEmpty
            >
              <MenuItem value="">Todas as Equipes</MenuItem>
              <MenuItem value="Equipe A">Equipe A</MenuItem>
              <MenuItem value="Equipe B">Equipe B</MenuItem>
              <MenuItem value="Equipe C">Equipe C</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleGenerateReport}
              style={{ marginTop: '20px' }}
            >
              Gerar Relatório
            </Button>
          </Grid>
        </Grid>

        {/* Exibindo os resultados do relatório */}
        {reportData.length > 0 && (
          <div style={{ marginTop: '30px' }}>
            <Typography variant="h6" gutterBottom>
              Resultados do Relatório
            </Typography>

            <Grid container spacing={2}>
              {reportData.map((report) => (
                <Grid item xs={12} key={report.id}>
                  <Paper elevation={3} style={{ padding: '15px' }}>
                    <Typography variant="h6">{report.task}</Typography>
                    <Typography>Status: {report.status}</Typography>
                    <Typography>Equipe: {report.team}</Typography>
                    <Typography>Data: {report.date}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={handleExportCSV}
              style={{ marginTop: '20px' }}
            >
              Exportar para CSV
            </Button>
          </div>
        )}

        {/* Caso não encontre dados */}
        {reportData.length === 0 && (
          <Typography variant="body1" style={{ marginTop: '20px' }}>
            Nenhum dado encontrado para os filtros aplicados.
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Report;
