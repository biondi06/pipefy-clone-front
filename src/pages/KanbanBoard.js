import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Container, Grid, Typography, Paper } from '@mui/material';

const initialTasks = {
  todo: [{ id: '1', content: 'Tarefa 1' }, { id: '2', content: 'Tarefa 2' }],
  inProgress: [{ id: '3', content: 'Tarefa 3' }],
  done: [{ id: '4', content: 'Tarefa 4' }]
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;

    const sourceTasks = [...tasks[source.droppableId]];
    const [removed] = sourceTasks.splice(source.index, 1);
    const destinationTasks = [...tasks[destination.droppableId]];
    destinationTasks.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceTasks,
      [destination.droppableId]: destinationTasks
    });
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Kanban de Tarefas
      </Typography>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={3}>
          {Object.keys(tasks).map((columnId) => (
            <Grid item xs={4} key={columnId}>
              <Typography variant="h6">{columnId.toUpperCase()}</Typography>
              <Droppable droppableId={columnId}>
                {(provided) => (
                  <Paper
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{ minHeight: '300px', padding: '10px' }}
                  >
                    {tasks[columnId].map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <Paper
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{ 
                              ...provided.draggableProps.style,
                              padding: '10px',
                              marginBottom: '10px',
                              backgroundColor: '#fff',
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
