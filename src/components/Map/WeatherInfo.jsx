import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import useStyles from './styles';

const WeatherInfo = ({ lat, lng, data }) => {
  const classes = useStyles();
  
  if (!data || !data.weather) return null;
  
  return (
    <Box lat={lat} lng={lng}>
      <Paper elevation={3} sx={classes.weatherPaper}>
        <Box sx={classes.weatherContainer}>
          <Typography variant="subtitle2" gutterBottom sx={classes.weatherTitle}>
            {data.name}, {data.sys.country}
          </Typography>
          
          <Box sx={classes.weatherInfoContainer}>
            <img 
              src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} 
              alt={data.weather[0].description}
              style={classes.weatherIcon}
            />
            
            <Box>
              <Typography variant="h6" sx={classes.temperature}>
                {Math.round(data.main.temp)}°C
              </Typography>
              <Typography variant="body2" sx={classes.weatherDescription}>
                {data.weather[0].description}
              </Typography>
            </Box>
          </Box>
          
          <Box sx={classes.weatherDetails}>
            <Box>
              <Typography variant="caption">Humidity</Typography>
              <Typography variant="body2">{data.main.humidity}%</Typography>
            </Box>
            <Box>
              <Typography variant="caption">Wind</Typography>
              <Typography variant="body2">{data.wind.speed} m/s</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default WeatherInfo