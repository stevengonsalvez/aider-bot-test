import axios from 'axios';

const DOG_API_BASE_URL = 'https://dog.ceo/api';

export const getRandomDog = async () => {
  try {
    const response = await axios.get(`${DOG_API_BASE_URL}/breeds/image/random`);
    return response.data;
  } catch (error) {
    console.error('Error fetching random dog:', error);
    throw error;
  }
};

export const getAllBreeds = async () => {
  try {
    const response = await axios.get(`${DOG_API_BASE_URL}/breeds/list/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching dog breeds:', error);
    throw error;
  }
};

export const getBreedImages = async (breed, subBreed = null) => {
  try {
    let url;
    if (subBreed) {
      url = `${DOG_API_BASE_URL}/breed/${breed}/${subBreed}/images`;
    } else {
      url = `${DOG_API_BASE_URL}/breed/${breed}/images`;
    }
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching breed images:', error);
    throw error;
  }
};
