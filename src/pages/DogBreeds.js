import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  CircularProgress,
  Button
} from '@mui/material';
import { getAllBreeds, getBreedImages } from '../services/dogApi';

function DogBreeds() {
  const [breeds, setBreeds] = useState({});
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedSubBreed, setSelectedSubBreed] = useState('');
  const [breedImages, setBreedImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        setLoading(true);
        const data = await getAllBreeds();
        setBreeds(data.message);
      } catch (err) {
        setError('Failed to fetch dog breeds. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
    setSelectedSubBreed('');
    setBreedImages([]);
  };

  const handleSubBreedChange = (event) => {
    setSelectedSubBreed(event.target.value);
  };

  const fetchBreedImages = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getBreedImages(selectedBreed, selectedSubBreed || null);
      setBreedImages(data.message.slice(0, 8)); // Limit to 8 images
    } catch (err) {
      setError('Failed to fetch breed images. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getSubBreeds = () => {
    return selectedBreed ? breeds[selectedBreed] : [];
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dog Breeds
      </Typography>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="breed-select-label">Breed</InputLabel>
            <Select
              labelId="breed-select-label"
              id="breed-select"
              value={selectedBreed}
              label="Breed"
              onChange={handleBreedChange}
              disabled={loading && !breeds}
            >
              {Object.keys(breeds).sort().map((breed) => (
                <MenuItem key={breed} value={breed}>
                  {breed.charAt(0).toUpperCase() + breed.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {selectedBreed && getSubBreeds().length > 0 && (
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="sub-breed-select-label">Sub Breed</InputLabel>
              <Select
                labelId="sub-breed-select-label"
                id="sub-breed-select"
                value={selectedSubBreed}
                label="Sub Breed"
                onChange={handleSubBreedChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {getSubBreeds().map((subBreed) => (
                  <MenuItem key={subBreed} value={subBreed}>
                    {subBreed.charAt(0).toUpperCase() + subBreed.slice(1)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )}

        <Grid item xs={12}>
          <Button 
            variant="contained" 
            onClick={fetchBreedImages}
            disabled={!selectedBreed || loading}
            sx={{ mt: 1 }}
          >
            Show Images
          </Button>
        </Grid>
      </Grid>

      {loading && breedImages.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={2}>
          {breedImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={image}
                  alt={`${selectedBreed} ${selectedSubBreed}`}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {selectedBreed.charAt(0).toUpperCase() + selectedBreed.slice(1)}
                    {selectedSubBreed && ` - ${selectedSubBreed.charAt(0).toUpperCase() + selectedSubBreed.slice(1)}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {breedImages.length === 0 && !loading && selectedBreed && (
        <Typography variant="body1" sx={{ textAlign: 'center', mt: 4 }}>
          Select a breed and click "Show Images" to see dog pictures.
        </Typography>
      )}
    </Box>
  );
}

export default DogBreeds;
