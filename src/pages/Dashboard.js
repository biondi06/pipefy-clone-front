import React, { useEffect, useState } from 'react';
import API from '../api';  // Certifique-se de que este caminho está correto

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Faz uma requisição GET para obter a lista de usuários
    API.get('/users')
      .then(response => {
        setUsers(response.data);  // Atualiza o estado com os usuários recebidos
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
