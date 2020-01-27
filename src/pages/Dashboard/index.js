import React from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function Dashboard() {
  api.get('http://localhost:3337/appointments');

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Dashboard</h2>
      <h2>Dashboard</h2>
    </>
  );
}
