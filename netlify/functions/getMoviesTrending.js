const axios = require('axios');

exports.handler = async () => {
  const API_KEY = process.env.API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

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
