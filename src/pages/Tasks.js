import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Grid, Button, TextField, IconButton } from '@mui/material';
import { toast } from 'react-toastify';
import { DatePicker } from '@mui/lab';
import AddCommentIcon from '@mui/icons-material/AddComment';
import DeleteIcon from '@mui/icons-material/Delete';
import './Tasks.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Tarefa 1',
      sla: '24 horas',
      dueDate: null,
      status: 'Em Progresso',
      priority: 'Alta',
      comments: [],
      history: []
    },
    {
      id: 2,
      name: 'Tarefa 2',
      sla: '48 horas',
      dueDate: null,
      status: 'Pendente',
      priority: 'Média',
      comments: [],
      history: []
    }
  ]);

  const [newTask, setNewTask] = useState({
    name: '',
    sla: '',
    priority: 'Baixa',
    dueDate: null
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [autoUpdateEnabled, setAutoUpdateEnabled] = useState(true);

  // Atualização automática das tarefas
  useEffect(() => {
    if (autoUpdateEnabled) {
      const interval = setInterval(() => {
        const updatedTasks = tasks.map((task) => {
          if (task.status === 'Em Progresso') {
            return {
              ...task,
              status: 'Concluído',
              history: [...task.history, `Status alterado automaticamente para Concluído em ${new Date().toLocaleString()}`]
            };
          }
          return task;
        });
        setTasks(updatedTasks);
        toast.success('Tarefas atualizadas automaticamente!');
      }, 60000);
      return () => clearInterval(interval);
    }
  }, [tasks, autoUpdateEnabled]);

  // Função para solicitar aprovação
  const handleApprovalRequest = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: 'Aguardando Aprovação' };
      }
      return task;
    });
    setTasks(updatedTasks);
    toast.info('Aprovação solicitada.');
  };

  // Função para alterar o status da tarefa manualmente
  const handleStatusChange = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          status: newStatus,
          history: [...task.history, `Status alterado para ${newStatus} em ${new Date().toLocaleString()}`]
        };
      }
      return task;
    });
    setTasks(updatedTasks);
    toast.success(`Status da tarefa alterado para ${newStatus}`);
  };

  // Função para adicionar um comentário
  const handleAddComment = (taskId, comment) => {
    if (!comment) {
      toast.error('O comentário não pode estar vazio!');
      return;
    }
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          comments: [...task.comments, { text: comment, date: new Date().toLocaleString() }]
        };
      }
      return task;
    });
    setTasks(updatedTasks);
    toast.success('Comentário adicionado!');
  };

  // Função para criar uma nova tarefa
  const handleCreateTask = () => {
    if (!newTask.name || !newTask.sla) {
      toast.error('Preencha o nome e o SLA da tarefa!');
      return;
    }

    const newTaskObj = {
      id: tasks.length + 1,
      ...newTask,
      status: 'Pendente',
      comments: [],
      history: [`Tarefa criada em ${new Date().toLocaleString()}`]
    };
    setTasks([...tasks, newTaskObj]);
    toast.success('Nova tarefa criada!');
    setNewTask({ name: '', sla: '', priority: 'Baixa', dueDate: null });
  };

  // Função para deletar uma tarefa
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    toast.success('Tarefa deletada com sucesso!');
  };

  // Filtro para pesquisar tarefas
  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.priority.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Paper elevation={6} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Tarefas
        </Typography>

        {/* Campo de Busca */}
        <TextField
          label="Buscar tarefas"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginBottom: '20px' }}
        />

        {/* Formulário para adicionar nova tarefa */}
        <Typography variant="h6" gutterBottom>
          Criar Nova Tarefa
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nome da Tarefa"
              variant="outlined"
              fullWidth
              value={newTask.name}
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="SLA"
              variant="outlined"
              fullWidth
              value={newTask.sla}
              onChange={(e) => setNewTask({ ...newTask, sla: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Prioridade"
              variant="outlined"
              fullWidth
              value={newTask.priority}
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <DatePicker
              label="Data de Vencimento"
              value={newTask.dueDate}
              onChange={(date) => setNewTask({ ...newTask, dueDate: date })}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth onClick={handleCreateTask}>
              Criar Tarefa
            </Button>
          </Grid>
        </Grid>

        {/* Botão para habilitar/desabilitar automação */}
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          style={{ marginTop: '20px' }}
          onClick={() => setAutoUpdateEnabled(!autoUpdateEnabled)}
        >
          {autoUpdateEnabled ? 'Desabilitar Atualização Automática' : 'Habilitar Atualização Automática'}
        </Button>

        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          {filteredTasks.map((task) => (
            <Grid item xs={12} key={task.id}>
              <Paper className={`task-card ${task.status.toLowerCase().replace(' ', '-')}`} elevation={3} style={{ padding: '15px' }}>
                <Typography variant="h6">{task.name}</Typography>
                <Typography>SLA: {task.sla}</Typography>
                <Typography>Status: {task.status}</Typography>
                <Typography>Prioridade: {task.priority}</Typography>
                <Typography>Data de Vencimento: {task.dueDate ? task.dueDate.toLocaleDateString() : 'Sem data definida'}</Typography>

                {/* Histórico de Atividades */}
                <Typography variant="body2" style={{ marginTop: '10px' }}>
                  Histórico:
                </Typography>
                {task.history.map((event, index) => (
                  <Typography key={index} variant="body2" style={{ marginLeft: '15px' }}>
                    - {event}
                  </Typography>
                ))}

                {/* Comentários */}
                <Typography variant="body2" style={{ marginTop: '10px' }}>
                  Comentários:
                </Typography>
                {task.comments.map((comment, index) => (
                  <Typography key={index} variant="body2" style={{ marginLeft: '15px' }}>
                    - {comment.text} ({comment.date})
                  </Typography>
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddCommentIcon />}
                  onClick={() => handleAddComment(task.id, prompt('Adicione um comentário:'))}
                  style={{ marginTop: '10px' }}
                >
                  Adicionar Comentário
                </Button>

                {/* Botão de Aprovação ou Conclusão */}
                {task.status === 'Aguardando Aprovação' ? (
                  <Typography color="secondary">Aguardando Aprovação</Typography>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleApprovalRequest(task.id)}
                    style={{ marginTop: '10px' }}
                  >
                    Solicitar Aprovação
                  </Button>
                )}

                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: '10px', marginTop: '10px' }}
                  onClick={() => handleStatusChange(task.id, 'Concluído')}
                >
                  Marcar como Concluído
                </Button>

                {/* Botão de deletar tarefa */}
                <IconButton
                  aria-label="delete"
                  color="secondary"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Tasks;
