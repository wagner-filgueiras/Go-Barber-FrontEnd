import axios from 'axios';

const api = axios.create({
  baseUrl: 'http://localhost:3337',
});

export default api;
