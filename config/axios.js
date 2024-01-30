// config/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://18df-45-71-76-107.ngrok-free.app'
});

export default instance;
