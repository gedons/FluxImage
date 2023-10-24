import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fluximage-api.onrender.com',
});

export default instance;
