import React from 'react';
import { Box, Typography, Paper, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = ({ darkMode }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          textAlign: 'center',
          bgcolor: darkMode ? '#333' : '#fff',
          color: darkMode ? '#fff' : '#333'
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Pet Explorer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ color: darkMode ? '#ccc' : '#666' }}>
          Discover amazing dogs and cats with our app
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 4, justifyContent: 'center' }}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: darkMode ? '#444' : '#f5f5f5',
                color: darkMode ? '#fff' : '#333'
              }}
            >
              <Typography variant="h6" gutterBottom>
                Dogs
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, flexGrow: 1, color: darkMode ? '#ccc' : '#666' }}>
                Explore different dog breeds and see random dog images
              </Typography>
              <Button 
                component={Link} 
                to="/dogs/random" 
                variant="contained"
                sx={{ 
                  bgcolor: darkMode ? '#555' : '#1976d2',
                  '&:hover': {
                    bgcolor: darkMode ? '#777' : '#1565c0',
                  }
                }}
              >
                Explore Dogs
              </Button>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: darkMode ? '#444' : '#f5f5f5',
                color: darkMode ? '#fff' : '#333'
              }}
            >
              <Typography variant="h6" gutterBottom>
                Cats
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, flexGrow: 1, color: darkMode ? '#ccc' : '#666' }}>
                Discover random cat images and interesting cat facts
              </Typography>
              <Button 
                component={Link} 
                to="/cats/random" 
                variant="contained"
                sx={{ 
                  bgcolor: darkMode ? '#555' : '#1976d2',
                  '&:hover': {
                    bgcolor: darkMode ? '#777' : '#1565c0',
                  }
                }}
              >
                Explore Cats
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Home;
