import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@mui/material';

import { getPlacesData, getWeatherData } from './api/travelAdvisorAPI';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import Loading from './components/Loading/Loading';

const App = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Get user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error('Error getting location:', error);
        // Default to New York City if geolocation fails
        setCoords({ lat: 40.7128, lng: -74.006 });
      },
      { enableHighAccuracy: true }
    );
  }, []);

  // Filter places by rating
  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filtered);
  }, [rating, places]);

  // Fetch places and weather data when bounds or type changes
  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      // Get weather data for current coordinates
      getWeatherData(coords.lat, coords.lng)
        .then((data) => setWeatherData(data))
        .catch((error) => console.error('Error fetching weather data:', error));

      // Get places data based on type and bounds
      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          if (data) {
            setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
            setFilteredPlaces([]);
            setRating('');
          }
        })
        .catch((error) => console.error('Error fetching places data:', error))
        .finally(() => setIsLoading(false));
    }
  }, [bounds, type, coords.lat, coords.lng]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      
      if (place && place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        
        setCoords({ lat, lng });
      }
    }
  };

  return (
    <>
      <CssBaseline />
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      <Grid container spacing={3} sx={{ width: '100%', margin: 0, padding: 2 }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          {isLoading ? (
            <Loading />
          ) : (
            <Map
              setChildClicked={setChildClicked}
              setBounds={setBounds}
              setCoords={setCoords}
              coords={coords}
              places={filteredPlaces.length ? filteredPlaces : places}
              weatherData={weatherData}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default App;