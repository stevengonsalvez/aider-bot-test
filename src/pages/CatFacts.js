import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  Paper, 
  CircularProgress,
  Button,
  Divider
} from '@mui/material';
import { getCatFacts } from '../services/catApi';

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCatFacts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCatFacts();
      setFacts(data.data);
    } catch (err) {
      setError('Failed to fetch cat facts. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatFacts();
  }, []);

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Cat Facts
      </Typography>
      
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      
      <Button 
        variant="contained" 
        onClick={fetchCatFacts}
        disabled={loading}
        sx={{ mb: 3 }}
      >
        {loading ? 'Loading...' : 'Get New Facts'}
      </Button>
      
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Paper elevation={3}>
          <List>
            {facts.map((fact, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText 
                    primary={`Fact #${index + 1}`} 
                    secondary={fact.fact} 
                    secondaryTypographyProps={{ 
                      component: 'div',
                      sx: { mt: 1, fontSize: '1rem' }
                    }}
                  />
                </ListItem>
                {index < facts.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
}

export default CatFacts;
