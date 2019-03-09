const axios = require('axios');

const http = axios.create({
  baseURL: 'https://www.eobot.com',
});

module.exports = http;
