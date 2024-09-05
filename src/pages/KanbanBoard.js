// src/pages/KanbanBoard.js

import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Button, TextField } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = [
  { id: '1', content: 'Tarefa 1' },
  { id: '2', content: 'Tarefa 2' },
  { id: '3', content: 'Tarefa 3' }
];

const KanbanBoard = () => {
  // Remover 'setTasks', pois não está sendo usado.
  const [tasks] = useState(initialTasks);
  const [columns, setColumns] = useState({
    'to-do': { name: 'A Fazer', items: tasks },
    'in-progress': { name: 'Em Progresso', items: [] },
    'done': { name: 'Concluído', items: [] }
  });

  const [newTask, setNewTask] = useState('');  // Estado para nova tarefa

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: Date.now().toString(),
        content: newTask
      };
      setColumns({
        ...columns,
        'to-do': {
          ...columns['to-do'],
          items: [...columns['to-do'].items, newTaskObj]
        }
      });
      setNewTask(''); // Limpar o campo de entrada
    }
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    const destItems = [...destColumn.items];
    destItems.splice(destination.index, 0, removed);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Kanban Board
      </Typography>

      {/* Adicionar nova tarefa */}
      <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item xs={8}>
          <TextField
            label="Nova Tarefa"
            variant="outlined"
            fullWidth
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" fullWidth onClick={handleAddTask}>
            Adicionar Tarefa
          </Button>
        </Grid>
      </Grid>

      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={4}>
          {Object.entries(columns).map(([id, column]) => (
            <Grid item xs={4} key={id}>
              <Typography variant="h6">{column.name}</Typography>
              <Droppable droppableId={id}>
                {(provided) => (
                  <Paper
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{ padding: '20px', minHeight: '300px' }}
                  >
                    {column.items.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <Paper
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              padding: '15px',
                              marginBottom: '10px',
                              ...provided.draggableProps.style
                            }}
                          >
                            {task.content}
                          </Paper>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Paper>
                )}
              </Droppable>
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    </Container>
  );
};

export default KanbanBoard;
