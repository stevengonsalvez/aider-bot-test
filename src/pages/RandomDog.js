import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardMedia, Typography, CircularProgress } from '@mui/material';
import { getRandomDog } from '../services/dogApi';

function RandomDog() {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomDog = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getRandomDog();
      setDogImage(data.message);
    } catch (err) {
      setError('Failed to fetch a random dog image. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomDog();
  }, []);

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Random Dog
      </Typography>
      
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      
      <Card sx={{ mb: 3 }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <CardMedia
            component="img"
            image={dogImage}
            alt="Random dog"
            sx={{ 
              height: 500, 
              objectFit: 'contain',
              backgroundColor: 'black'
            }}
          />
        )}
      </Card>
      
      <Button 
        variant="contained" 
        onClick={fetchRandomDog}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Fetch Another Dog'}
      </Button>
    </Box>
  );
}

export default RandomDog;
