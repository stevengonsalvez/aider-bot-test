import axios from 'axios';

const CAT_API_KEY = 'live_vOHQHXTJJlLxNVZQy9Vd5gGRsWrDOQJTLlGGsgCBQpGJAQKEXTLdvlLWYQoSGYLl';
const CAT_API_BASE_URL = 'https://api.thecatapi.com/v1';
const CAT_FACTS_API_URL = 'https://catfact.ninja';

export const getRandomCat = async () => {
  try {
    const response = await axios.get(`${CAT_API_BASE_URL}/images/search`, {
      headers: {
        'x-api-key': CAT_API_KEY
      }
    });
    return response.data[0];
  } catch (error) {
    console.error('Error fetching random cat:', error);
    throw error;
  }
};

export const getCatFacts = async (limit = 10) => {
  try {
    const response = await axios.get(`${CAT_FACTS_API_URL}/facts`, {
      params: { limit }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cat facts:', error);
    throw error;
  }
};
