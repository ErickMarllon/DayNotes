import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://day-notes-ten.vercel.app/' ||
    'https://day-notes-git-main-erickmarllon.vercel.app/' ||
    'https://day-notes-83zjjbron-erickmarllon.vercel.app/',
});

export default api;
