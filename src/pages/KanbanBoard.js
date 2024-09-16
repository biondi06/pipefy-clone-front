import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Button, TextField } from '@mui/material';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './KanbanBoard.css';

// Definindo os tipos de objetos que podem ser arrastados
const ItemTypes = {
  CARD: 'card',
  COLUMN: 'column'
};

const initialTasks = [
  { id: '1', content: 'Tarefa 1' },
  { id: '2', content: 'Tarefa 2' },
  { id: '3', content: 'Tarefa 3' }
];

const initialColumns = {
  'column-1': {
    name: 'A Fazer',
    items: initialTasks
  },
  'column-2': {
    name: 'Em Progresso',
    items: []
  },
  'column-3': {
    name: 'Concluído',
    items: []
  }
};

// Componente de Cartão (Card)
const Card = ({ task, index, moveCard }) => {
  const [, ref] = useDrag({
    type: ItemTypes.CARD,
    item: { task, index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    }
  });

  return (
    <Paper ref={(node) => ref(drop(node))} className="kanban-card">
      {task.content}
    </Paper>
  );
};

// Componente de Coluna (Listas)
const Column = ({ column, index, moveColumn, children }) => {
  const [, ref] = useDrag({
    type: ItemTypes.COLUMN,
    item: { index }
  });

  const [, drop] = useDrop({
    accept: ItemTypes.COLUMN,
    hover: (draggedColumn) => {
      if (draggedColumn.index !== index) {
        moveColumn(draggedColumn.index, index);
        draggedColumn.index = index;
      }
    }
  });

  return (
    <Grid item xs={4} ref={(node) => ref(drop(node))}>
      <Typography variant="h6">{column.name}</Typography>
      {children}
    </Grid>
  );
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [newCardContent, setNewCardContent] = useState('');
  const [newListName, setNewListName] = useState('');

  // Função para mover os cartões entre as colunas
  const moveCard = (fromColumnId, toColumnId, fromIndex, toIndex) => {
    const fromColumn = columns[fromColumnId];
    const toColumn = columns[toColumnId];

    const [movedItem] = fromColumn.items.splice(fromIndex, 1);
    toColumn.items.splice(toIndex, 0, movedItem);

    setColumns({ ...columns, [fromColumnId]: fromColumn, [toColumnId]: toColumn });
  };

  // Função para mover as colunas
  const moveColumn = (fromIndex, toIndex) => {
    const columnOrder = Object.keys(columns);
    const [movedColumnId] = columnOrder.splice(fromIndex, 1);
    columnOrder.splice(toIndex, 0, movedColumnId);

    const reorderedColumns = {};
    columnOrder.forEach((columnId) => {
      reorderedColumns[columnId] = columns[columnId];
    });

    setColumns(reorderedColumns);
  };

  // Função para adicionar um novo cartão
  const handleAddCard = () => {
    if (newCardContent.trim()) {
      const newCard = { id: `${Date.now()}`, content: newCardContent };
      setColumns({
        ...columns,
        'column-1': {
          ...columns['column-1'],
          items: [...columns['column-1'].items, newCard]
        }
      });
      setNewCardContent('');
    }
  };

  // Função para adicionar uma nova lista
  const handleAddList = () => {
    if (newListName.trim()) {
      const newListId = `column-${Object.keys(columns).length + 1}`;
      setColumns({
        ...columns,
        [newListId]: {
          name: newListName,
          items: []
        }
      });
      setNewListName('');
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Container maxWidth="lg" style={{ marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          Kanban Board (Arrastar Listas e Cartões)
        </Typography>

        {/* Adicionar novo cartão */}
        <div style={{ marginBottom: '20px' }}>
          <TextField
            label="Novo Cartão"
            variant="outlined"
            value={newCardContent}
            onChange={(e) => setNewCardContent(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <Button variant="contained" color="primary" onClick={handleAddCard}>
            Adicionar Cartão
          </Button>
        </div>

        {/* Adicionar nova lista */}
        <div style={{ marginBottom: '20px' }}>
          <TextField
            label="Nome da Nova Lista"
            variant="outlined"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <Button variant="contained" color="secondary" onClick={handleAddList}>
            Adicionar Lista
          </Button>
        </div>

        <Grid container spacing={4}>
          {Object.entries(columns).map(([columnId, column], columnIndex) => (
            <Column
              key={columnId}
              column={column}
              index={columnIndex}
              moveColumn={moveColumn}
            >
              {column.items.map((task, index) => (
                <Card
                  key={task.id}
                  task={task}
                  index={index}
                  moveCard={(fromIndex, toIndex) =>
                    moveCard(columnId, columnId, fromIndex, toIndex)
                  }
                />
              ))}
            </Column>
          ))}
        </Grid>
      </Container>
    </DndProvider>
  );
};

export default KanbanBoard;
