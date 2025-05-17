import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, MenuItem, FormControl, Select, InputLabel, Box } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles';

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) => Array(places?.length)
      .fill()
      .map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <Box sx={classes.container}>
      <Typography variant="h5" sx={classes.title}>
        Find Restaurants, Hotels & Attractions around you
      </Typography>
      {isLoading ? (
        <Box sx={classes.loading}>
          <CircularProgress size="3rem" />
        </Box>
      ) : (
        <>
          <FormControl sx={classes.formControl}>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              id="type"
              value={type}
              label="Type"
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={classes.formControl}>
            <InputLabel id="rating-label">Rating</InputLabel>
            <Select
              labelId="rating-label"
              id="rating"
              value={rating}
              label="Rating"
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} sx={classes.list}>
            {places?.length ? (
              places.map((place, i) => (
                <Grid ref={elRefs[i]} key={i} item xs={12}>
                  <PlaceDetails
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                    place={place}
                  />
                </Grid>
              ))
            ) : (
              <Box sx={classes.noResults}>
                <Typography variant="body1">
                  No places found. Try changing the search area or filters.
                </Typography>
              </Box>
            )}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default List;