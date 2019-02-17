/* Unsplash API */

import axios from 'axios';

const accessKey = 'c718274cbb6cd19dad2660fe3ac2c6aa84edd35d7eec03883bf156acc6166bcd';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: `Client-ID ${accessKey}` },
});

export default unsplashApi; 
