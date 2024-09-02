import React from 'react';
import { Bar } from 'react-chartjs-2';

function Reports() {
  const data = {
    labels: ['Task A', 'Task B', 'Task C'],
    datasets: [
      {
        label: 'Tarefas Concluídas',
        data: [12, 19, 3],
        backgroundColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
}

export default Reports;
