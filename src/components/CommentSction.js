import React, { useState } from 'react';

const CommentSection = ({ taskId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setNewComment("");
  };

  return (
    <div>
      <h3>Comentários</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <input 
        type="text" 
        value={newComment} 
        onChange={(e) => setNewComment(e.target.value)} 
        placeholder="Adicione um comentário" 
      />
      <button onClick={handleAddComment}>Adicionar Comentário</button>
    </div>
  );
};

export default CommentSection;
