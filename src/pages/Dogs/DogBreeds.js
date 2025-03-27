import React, { useState, useEffect } from 'react';
import { fetchDogBreeds, fetchDogByBreed } from '../../services/api';
import { 
  Box, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  CircularProgress, 
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

const DogBreeds = ({ darkMode }) => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBreeds = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchDogBreeds();
        const breedsList = Object.keys(data.message);
        setBreeds(breedsList);
        if (breedsList.length > 0) {
          setSelectedBreed(breedsList[0]);
          loadDogByBreed(breedsList[0]);
        }
      } catch (err) {
        setError('Failed to fetch dog breeds. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadBreeds();
  }, []);

  const loadDogByBreed = async (breed) => {
    try {
      setImageLoading(true);
      const data = await fetchDogByBreed(breed);
      setDogImage(data.message);
    } catch (err) {
      console.error(err);
      setError(`Failed to fetch ${breed} image. Please try again.`);
    } finally {
      setImageLoading(false);
    }
  };

  const handleBreedChange = (event) => {
    const breed = event.target.value;
    setSelectedBreed(breed);
    loadDogByBreed(breed);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: darkMode ? '#fff' : '#333' }}>
        Dog Breeds
      </Typography>
      
      <FormControl 
        fullWidth 
        sx={{ 
          mb: 4, 
          maxWidth: 400, 
          mx: 'auto',
          '& .MuiOutlinedInput-root': {
            color: darkMode ? '#fff' : '#333',
            '& fieldset': {
              borderColor: darkMode ? '#555' : '#ccc',
            },
            '&:hover fieldset': {
              borderColor: darkMode ? '#777' : '#999',
            },
          },
          '& .MuiInputLabel-root': {
            color: darkMode ? '#ccc' : '#666',
          },
        }}
      >
        <InputLabel id="breed-select-label">Select a Breed</InputLabel>
        <Select
          labelId="breed-select-label"
          id="breed-select"
          value={selectedBreed}
          label="Select a Breed"
          onChange={handleBreedChange}
        >
          {breeds.map((breed) => (
            <MenuItem 
              key={breed} 
              value={breed}
              sx={{ 
                color: darkMode ? '#fff' : '#333',
                bgcolor: darkMode ? '#333' : '#fff',
                '&:hover': {
                  bgcolor: darkMode ? '#444' : '#f5f5f5',
                },
                '&.Mui-selected': {
                  bgcolor: darkMode ? '#555' : '#e0e0e0',
                  '&:hover': {
                    bgcolor: darkMode ? '#666' : '#d5d5d5',
                  },
                },
              }}
            >
              {breed.charAt(0).toUpperCase() + breed.slice(1)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      {imageLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      ) : dogImage && (
        <Card sx={{ 
          maxWidth: 500, 
          mx: 'auto',
          bgcolor: darkMode ? '#333' : '#fff',
          color: darkMode ? '#fff' : '#333'
        }}>
          <CardMedia
            component="img"
            height="400"
            image={dogImage}
            alt={selectedBreed}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent>
            <Typography variant="h6" sx={{ color: darkMode ? '#fff' : '#333' }}>
              {selectedBreed.charAt(0).toUpperCase() + selectedBreed.slice(1)}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default DogBreeds;
