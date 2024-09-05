import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';

const CalendarView = () => {
  // Inicializando eventos como um array vazio para evitar o erro de 'map' em undefined
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulação de carregamento de eventos (substitua pela chamada de API real, se necessário)
    const fetchedEvents = [
      { id: 1, title: 'Reunião com cliente', date: '2024-09-05' },
      { id: 2, title: 'Entrega de projeto', date: '2024-09-10' }
    ];
    setEvents(fetchedEvents);
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Calendário
      </Typography>

      {/* Verifica se há eventos a serem exibidos */}
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.id} style={{ marginBottom: '10px' }}>
            <Typography variant="h6">{event.title}</Typography>
            <Typography variant="body1">Data: {event.date}</Typography>
          </div>
        ))
      ) : (
        <Typography variant="body1">Nenhum evento encontrado.</Typography>
      )}
    </Container>
  );
};

export default CalendarView;
