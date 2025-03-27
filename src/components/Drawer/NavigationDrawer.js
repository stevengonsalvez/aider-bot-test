import React, { useState } from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  IconButton, 
  Divider, 
  Collapse, 
  AppBar, 
  Toolbar, 
  Typography,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Pets as PetsIcon, 
  ExpandLess, 
  ExpandMore, 
  Pets as DogIcon, 
  Info as InfoIcon,
  Collections as CollectionsIcon,
  Category as CategoryIcon
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const NavigationDrawer = ({ darkMode }) => {
  const [open, setOpen] = useState(false);
  const [dogsOpen, setDogsOpen] = useState(false);
  const [catsOpen, setCatsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const toggleDogs = () => {
    setDogsOpen(!dogsOpen);
  };

  const toggleCats = () => {
    setCatsOpen(!catsOpen);
  };

  const closeDrawerIfMobile = () => {
    if (isMobile) {
      setOpen(false);
    }
  };

  const drawerWidth = 240;

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: theme.zIndex.drawer + 1,
          bgcolor: darkMode ? '#333' : '#f5f5f5',
          color: darkMode ? '#fff' : '#333'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Pet Explorer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? open : true}
        onClose={toggleDrawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: darkMode ? '#222' : '#fff',
            color: darkMode ? '#fff' : '#333',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', mt: 2 }}>
          <List>
            {/* Dogs Section */}
            <ListItem button onClick={toggleDogs}>
              <ListItemIcon>
                <DogIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
              </ListItemIcon>
              <ListItemText primary="Dogs" />
              {dogsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={dogsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem 
                  button 
                  component={Link} 
                  to="/dogs/random" 
                  onClick={closeDrawerIfMobile}
                  selected={location.pathname === '/dogs/random'}
                  sx={{ pl: 4 }}
                >
                  <ListItemIcon>
                    <PetsIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
                  </ListItemIcon>
                  <ListItemText primary="Random Dog" />
                </ListItem>
                <ListItem 
                  button 
                  component={Link} 
                  to="/dogs/breeds" 
                  onClick={closeDrawerIfMobile}
                  selected={location.pathname === '/dogs/breeds'}
                  sx={{ pl: 4 }}
                >
                  <ListItemIcon>
                    <CategoryIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
                  </ListItemIcon>
                  <ListItemText primary="Dog Breeds" />
                </ListItem>
              </List>
            </Collapse>

            <Divider sx={{ my: 1, bgcolor: darkMode ? '#444' : '#ddd' }} />

            {/* Cats Section */}
            <ListItem button onClick={toggleCats}>
              <ListItemIcon>
                <PetsIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
              </ListItemIcon>
              <ListItemText primary="Cats" />
              {catsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={catsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem 
                  button 
                  component={Link} 
                  to="/cats/random" 
                  onClick={closeDrawerIfMobile}
                  selected={location.pathname === '/cats/random'}
                  sx={{ pl: 4 }}
                >
                  <ListItemIcon>
                    <CollectionsIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
                  </ListItemIcon>
                  <ListItemText primary="Random Cat" />
                </ListItem>
                <ListItem 
                  button 
                  component={Link} 
                  to="/cats/facts" 
                  onClick={closeDrawerIfMobile}
                  selected={location.pathname === '/cats/facts'}
                  sx={{ pl: 4 }}
                >
                  <ListItemIcon>
                    <InfoIcon sx={{ color: darkMode ? '#fff' : '#333' }} />
                  </ListItemIcon>
                  <ListItemText primary="Cat Facts" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavigationDrawer;
