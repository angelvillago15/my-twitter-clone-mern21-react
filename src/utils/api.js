import axios from 'axios';
import config from '../config.js';

export default axios.create({
  baseURL: config.baseURL_API
  //baseURL: 'http://localhost:3000'  //con proxy en package.json, "proxy": "https://localhost:3000/"
});