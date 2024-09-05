import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const TaskComments = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <div>
      <TextField
        label="Adicionar Comentário"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAddComment} style={{ marginTop: '10px' }}>
        Adicionar
      </Button>
      <List style={{ marginTop: '20px' }}>
        {comments.map((cmt, index) => (
          <ListItem key={index}>
            <ListItemText primary={cmt} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TaskComments;
