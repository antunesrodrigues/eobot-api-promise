const toQueryString = require('to-querystring').default;
const httpAx = require('./http');

const apiRequest = async (data, endpoint) => {
  const http = httpAx(endpoint);

  const query = toQueryString({
    ...data,
    ...{ json: true },
  });

  return http.post(`api.aspx?${query}`)
    .then(res => res.data);
};
module.exports = apiRequest;
