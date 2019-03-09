const http = require('./http');
const objectToQuery = require('../obj-to-query');


const apiRequest = async (data) => {
  const query = objectToQuery({
    ...data,
    ...{ json: true },
  });

  return http.post(`api.aspx?${query}`)
    .then(res => res.data);
};
module.exports = apiRequest;
