import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Button } from '@mui/material';

const TaskFilters = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    date: ''
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApplyFilters = () => {
    onFilter(filters);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <TextField
          label="Status"
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          select
          fullWidth
        >
          <MenuItem value="">Todos</MenuItem>
          <MenuItem value="todo">A Fazer</MenuItem>
          <MenuItem value="inProgress">Em Progresso</MenuItem>
          <MenuItem value="done">Concluído</MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={4}>
        <TextField
          label="Prioridade"
          name="priority"
          value={filters.priority}
          onChange={handleFilterChange}
          select
          fullWidth
        >
          <MenuItem value="">Todas</MenuItem>
          <MenuItem value="low">Baixa</MenuItem>
          <MenuItem value="medium">Média</MenuItem>
          <MenuItem value="high">Alta</MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={4}>
        <TextField
          label="Data"
          name="date"
          type="date"
          value={filters.date}
          onChange={handleFilterChange}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleApplyFilters}>
          Aplicar Filtros
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskFilters;
