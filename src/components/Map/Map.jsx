import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Box, Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

import mapStyles from '../../mapStyles';
import useStyles from './styles';
import WeatherInfo from './WeatherInfo';

const Map = ({ coords, setCoords, setBounds, setChildClicked, places, weatherData }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');

  // Google Maps API Key - in a real project, this would be in environment variables
  const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your actual API key

  return (
    <Box sx={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ 
          disableDefaultUI: true, 
          zoomControl: true, 
          styles: mapStyles 
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.length && places.map((place, i) => (
          <Box
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
            sx={classes.markerContainer}
            onClick={() => setChildClicked(i)}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} sx={classes.paper}>
                <Typography variant="subtitle2" gutterBottom sx={classes.typography}>
                  {place.name}
                </Typography>
                <img
                  src={place.photo ? place.photo.images.small.url : 'https://via.placeholder.com/150x100?text=No+Image'}
                  alt={place.name}
                  style={classes.placeImage}
                />
                <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </Box>
        ))}
        {weatherData?.weather && (
          <WeatherInfo 
            lat={weatherData.coord.lat}
            lng={weatherData.coord.lon}
            data={weatherData}
          />
        )}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;