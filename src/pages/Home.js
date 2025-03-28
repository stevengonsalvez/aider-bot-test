import React from 'react';
import { Typography, Box, Card, CardContent, CardMedia, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Pet Explorer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
          Discover amazing images and facts about dogs and cats
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="240"
              image="https://images.dog.ceo/breeds/retriever-golden/n02099601_1722.jpg"
              alt="Dog"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Dogs
              </Typography>
              <Typography>
                Explore random dog images and learn about different dog breeds. Dogs have been companions to humans for thousands of years.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button 
                  variant="contained" 
                  onClick={() => navigate('/dogs/random')}
                  sx={{ mr: 1, mb: 1 }}
                >
                  Random Dog
                </Button>
                <Button 
                  variant="outlined" 
                  onClick={() => navigate('/dogs/breeds')}
                  sx={{ mb: 1 }}
                >
                  Dog Breeds
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="240"
              image="https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg"
              alt="Cat"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Cats
              </Typography>
              <Typography>
                Discover random cat images and interesting facts about cats. Cats have been domesticated for around 4,000 years and are known for their independence.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button 
                  variant="contained" 
                  onClick={() => navigate('/cats/random')}
                  sx={{ mr: 1, mb: 1 }}
                >
                  Random Cat
                </Button>
                <Button 
                  variant="outlined" 
                  onClick={() => navigate('/cats/facts')}
                  sx={{ mb: 1 }}
                >
                  Cat Facts
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
