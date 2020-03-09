import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ddd.pricez.com.br/ddds/',
});
export default api;
