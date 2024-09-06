// src/pages/KanbanBoard.js
import React, { useState } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = [
  { id: '1', content: 'Tarefa 1', lane: 'Prioridade Alta' },
  { id: '2', content: 'Tarefa 2', lane: 'Prioridade Média' },
  { id: '3', content: 'Tarefa 3', lane: 'Prioridade Baixa' }
];

const KanbanBoard = () => {
  const [columns, setColumns] = useState({
    'to-do': { name: 'A Fazer', items: initialTasks.filter(task => task.lane === 'Prioridade Alta') },
    'in-progress': { name: 'Em Progresso', items: [] },
    'done': { name: 'Concluído', items: [] }
  });

  const lanes = ['Prioridade Alta', 'Prioridade Média', 'Prioridade Baixa'];

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
        Kanban Board com Swimlanes
      </Typography>

      {lanes.map((lane) => (
        <div key={lane}>
          <Typography variant="h6" style={{ marginTop: '20px' }}>{lane}</Typography>
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
                        {column.items.filter(item => item.lane === lane).map((task, index) => (
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
        </div>
      ))}
    </Container>
  );
};

export default KanbanBoard;
