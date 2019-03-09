const toQueryString = require('to-querystring').default;
const http = require('./http');


const apiRequest = async (data) => {
  const query = toQueryString({
    ...data,
    ...{ json: true },
  });

  return http.post(`api.aspx?${query}`)
    .then(res => res.data);
};
module.exports = apiRequest;
