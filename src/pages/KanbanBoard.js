import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = [
  { id: 'task-1', content: 'Tarefa 1' },
  { id: 'task-2', content: 'Tarefa 2' },
  { id: 'task-3', content: 'Tarefa 3' }
];

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTasks = Array.from(tasks);
    const [removed] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, removed);

    setTasks(reorderedTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {task.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default KanbanBoard;
