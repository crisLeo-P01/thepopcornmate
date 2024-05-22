const axios = require('axios');

exports.handler = async (event) => {
  const API_KEY = process.env.API_KEY;
  const categoryId = event.queryStringParameters.categoryId;
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${categoryId}`;

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
