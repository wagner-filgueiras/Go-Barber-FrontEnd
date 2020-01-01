import axios from 'axios';

const api = axios.create({
  baseUrl: 'http://192.168.99.100:3337',
});

export default api;
