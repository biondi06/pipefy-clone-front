// src/pages/CalendarView.js

import React, { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { enUS } from 'date-fns/locale';
import { Container } from '@mui/material';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarView = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents([
      {
        title: 'Tarefa 1',
        start: new Date(),
        end: new Date(),
      },
      {
        title: 'Reunião',
        start: new Date(),
        end: new Date(),
      },
    ]);
  }, []);

  return (
    <Container style={{ marginTop: '50px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </Container>
  );
};

export default CalendarView;
