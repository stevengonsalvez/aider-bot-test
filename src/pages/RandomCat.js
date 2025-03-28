import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardMedia, Typography, CircularProgress } from '@mui/material';
import { getRandomCat } from '../services/catApi';

function RandomCat() {
  const [catImage, setCatImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomCat = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getRandomCat();
      setCatImage(data.url);
    } catch (err) {
      setError('Failed to fetch a random cat image. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomCat();
  }, []);

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Random Cat
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
            image={catImage}
            alt="Random cat"
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
        onClick={fetchRandomCat}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Fetch Another Cat'}
      </Button>
    </Box>
  );
}

export default RandomCat;
