/* Unsplash API */

import axios from 'axios';

const accessKey = '';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: `Client-ID ${accessKey}` },
});

export default unsplashApi; 
