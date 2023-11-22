import axios from 'axios';

const api = axios.create({
  baseURL: 'https://day-notes-ten.vercel.app',
});

export default api;
