import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import useStyles from './styles';

const Loading = () => {
  const classes = useStyles();
  
  return (
    <Box sx={classes.loadingContainer}>
      <CircularProgress size={60} thickness={4} color="primary" />
      <Typography variant="h6" sx={classes.loadingText}>
        Loading Map...
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={classes.subText}>
        Finding amazing places near you
      </Typography>
    </Box>
  );
};

export default Loading;