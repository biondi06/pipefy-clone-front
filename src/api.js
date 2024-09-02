import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api', // URL base para o backend
});

export default API;
