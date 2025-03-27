import React, { useState, useEffect } from 'react';
import { fetchRandomDog } from '../../services/api';
import { Box, Typography, Button, Card, CardMedia, CardContent, CircularProgress, Alert } from '@mui/material';

const RandomDog = ({ darkMode }) => {
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadRandomDog = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchRandomDog();
      setDog(data);
    } catch (err) {
      setError('Failed to fetch a random dog. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRandomDog();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: darkMode ? '#fff' : '#333' }}>
        Random Dog
      </Typography>
      
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}
      
      {error && (
        <Alert severity="error" sx={{ my: 2 }}>
          {error}
        </Alert>
      )}
      
      {dog && !loading && (
        <Card sx={{ 
          maxWidth: 500, 
          mx: 'auto', 
          bgcolor: darkMode ? '#333' : '#fff',
          color: darkMode ? '#fff' : '#333'
        }}>
          <CardMedia
            component="img"
            height="400"
            image={dog.message}
            alt="Random dog"
            sx={{ objectFit: 'cover' }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ color: darkMode ? '#ccc' : '#666' }}>
              A beautiful dog from the Dog API
            </Typography>
          </CardContent>
        </Card>
      )}
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button 
          variant="contained" 
          onClick={loadRandomDog}
          disabled={loading}
          sx={{ 
            bgcolor: darkMode ? '#555' : '#1976d2',
            '&:hover': {
              bgcolor: darkMode ? '#777' : '#1565c0',
            }
          }}
        >
          Fetch Another Dog
        </Button>
      </Box>
    </Box>
  );
};

export default RandomDog;
