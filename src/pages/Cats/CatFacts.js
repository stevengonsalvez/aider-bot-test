import React, { useState, useEffect } from 'react';
import { fetchCatFact } from '../../services/api';
import { Box, Typography, Button, Card, CardContent, CircularProgress, Alert, Grid } from '@mui/material';

const CatFacts = ({ darkMode }) => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadCatFact = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchCatFact();
      setFacts(prevFacts => [data, ...prevFacts].slice(0, 10)); // Keep only the 10 most recent facts
    } catch (err) {
      setError('Failed to fetch a cat fact. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCatFact();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: darkMode ? '#fff' : '#333' }}>
        Cat Facts
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Button 
          variant="contained" 
          onClick={loadCatFact}
          disabled={loading}
          sx={{ 
            bgcolor: darkMode ? '#555' : '#1976d2',
            '&:hover': {
              bgcolor: darkMode ? '#777' : '#1565c0',
            }
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Get New Fact'}
        </Button>
      </Box>
      
      {error && (
        <Alert severity="error" sx={{ my: 2 }}>
          {error}
        </Alert>
      )}
      
      <Grid container spacing={3}>
        {facts.map((fact, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ 
              bgcolor: darkMode ? '#333' : '#fff',
              color: darkMode ? '#fff' : '#333',
              boxShadow: 3
            }}>
              <CardContent>
                <Typography variant="body1" sx={{ color: darkMode ? '#fff' : '#333' }}>
                  {fact.fact}
                </Typography>
                {fact.length && (
                  <Typography variant="caption" sx={{ display: 'block', mt: 1, color: darkMode ? '#ccc' : '#666' }}>
                    Length: {fact.length} characters
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {facts.length === 0 && !loading && !error && (
        <Typography variant="body1" sx={{ textAlign: 'center', mt: 4, color: darkMode ? '#ccc' : '#666' }}>
          No facts available. Click the button to fetch some cat facts!
        </Typography>
      )}
    </Box>
  );
};

export default CatFacts;
