const axios = require('axios');

module.exports = endpoint => axios.create({
  baseURL: endpoint || 'https://www.eobot.com',
});
