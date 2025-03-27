import axios from 'axios';

// Dog API endpoints
const DOG_API_BASE_URL = 'https://dog.ceo/api';
const CAT_API_BASE_URL = 'https://api.thecatapi.com/v1';
const CAT_FACTS_API_URL = 'https://catfact.ninja';

// Dog API services
export const fetchRandomDog = async () => {
  try {
    const response = await axios.get(`${DOG_API_BASE_URL}/breeds/image/random`);
    return response.data;
  } catch (error) {
    console.error('Error fetching random dog:', error);
    throw error;
  }
};

export const fetchDogBreeds = async () => {
  try {
    const response = await axios.get(`${DOG_API_BASE_URL}/breeds/list/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching dog breeds:', error);
    throw error;
  }
};

export const fetchDogByBreed = async (breed) => {
  try {
    const response = await axios.get(`${DOG_API_BASE_URL}/breed/${breed}/images/random`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${breed} dog:`, error);
    throw error;
  }
};

// Cat API services
export const fetchRandomCat = async () => {
  try {
    const response = await axios.get(`${CAT_API_BASE_URL}/images/search`);
    return response.data[0];
  } catch (error) {
    console.error('Error fetching random cat:', error);
    throw error;
  }
};

export const fetchCatFact = async () => {
  try {
    const response = await axios.get(`${CAT_FACTS_API_URL}/fact`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cat fact:', error);
    throw error;
  }
};
