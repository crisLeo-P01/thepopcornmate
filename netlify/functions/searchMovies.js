const axios = require('axios');

exports.handler = async (event) => {
  const API_KEY = process.env.API_KEY;
  const query = event.queryStringParameters.query;
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

  try {
    const response = await axios.get(API_URL);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
