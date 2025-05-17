import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete } from '@react-google-maps/api';
import useStyles from './styles';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();
  const [searchPlaceholder, setSearchPlaceholder] = useState('Search for places...');

  return (
    <AppBar position="static" sx={classes.appBar}>
      <Toolbar sx={classes.toolbar}>
        <Typography variant="h5" sx={classes.title}>
          Travel Advisor
        </Typography>
        <Box sx={classes.search}>
          <Box sx={classes.searchIcon}>
            <SearchIcon />
          </Box>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <InputBase
              placeholder={searchPlaceholder}
              onFocus={() => setSearchPlaceholder('Type an address or location')}
              onBlur={() => setSearchPlaceholder('Search for places...')}
              sx={classes.inputRoot}
              inputProps={{ 'aria-label': 'search', style: classes.inputInput }}
            />
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;