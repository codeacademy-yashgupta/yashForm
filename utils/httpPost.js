const axios = require('axios');

const httpPost = (url, payload) => axios.post(url, payload);

module.exports = { httpPost };
