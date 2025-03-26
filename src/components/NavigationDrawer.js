import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Toolbar,
  Divider,
  IconButton,
  Typography,
  Box,
  AppBar,
  Collapse
} from '@mui/material';
import {
  Menu as MenuIcon,
  Pets as PetsIcon,
  Home as HomeIcon,
  ExpandLess,
  ExpandMore,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Photo as PhotoIcon,
  Category as CategoryIcon,
  Fact as FactIcon
} from '@mui/icons-material';

const drawerWidth = 240;

function NavigationDrawer({ darkMode, toggleTheme }) {
  const [open, setOpen] = useState(true);
  const [dogMenuOpen, setDogMenuOpen] = useState(false);
  const [catMenuOpen, setCatMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDogMenuToggle = () => {
    setDogMenuOpen(!dogMenuOpen);
  };

  const handleCatMenuToggle = () => {
    setCatMenuOpen(!catMenuOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: open ? `calc(100% - ${drawerWidth}px)` : '100%' },
          ml: { sm: open ? `${drawerWidth}px` : 0 },
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Pet Explorer
          </Typography>
          <IconButton color="inherit" onClick={toggleTheme}>
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton 
                onClick={() => navigateTo('/')}
                selected={isActive('/')}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            {/* Dogs Section */}
            <ListItem disablePadding>
              <ListItemButton onClick={handleDogMenuToggle}>
                <ListItemIcon>
                  <PetsIcon />
                </ListItemIcon>
                <ListItemText primary="Dogs" />
                {dogMenuOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={dogMenuOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton 
                  sx={{ pl: 4 }}
                  onClick={() => navigateTo('/dogs/random')}
                  selected={isActive('/dogs/random')}
                >
                  <ListItemIcon>
                    <PhotoIcon />
                  </ListItemIcon>
                  <ListItemText primary="Random Dog" />
                </ListItemButton>
                <ListItemButton 
                  sx={{ pl: 4 }}
                  onClick={() => navigateTo('/dogs/breeds')}
                  selected={isActive('/dogs/breeds')}
                >
                  <ListItemIcon>
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dog Breeds" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* Cats Section */}
            <ListItem disablePadding>
              <ListItemButton onClick={handleCatMenuToggle}>
                <ListItemIcon>
                  <PetsIcon />
                </ListItemIcon>
                <ListItemText primary="Cats" />
                {catMenuOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={catMenuOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton 
                  sx={{ pl: 4 }}
                  onClick={() => navigateTo('/cats/random')}
                  selected={isActive('/cats/random')}
                >
                  <ListItemIcon>
                    <PhotoIcon />
                  </ListItemIcon>
                  <ListItemText primary="Random Cat" />
                </ListItemButton>
                <ListItemButton 
                  sx={{ pl: 4 }}
                  onClick={() => navigateTo('/cats/facts')}
                  selected={isActive('/cats/facts')}
                >
                  <ListItemIcon>
                    <FactIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cat Facts" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  );
}

export default NavigationDrawer;
