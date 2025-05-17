import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Chip, Rating, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import useStyles from './styles';

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();

  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <Card elevation={selected ? 6 : 2} sx={selected ? classes.selectedCard : classes.card}>
      <CardMedia
        style={{ height: 250 }}
        image={place.photo ? place.photo.images.large.url : 'https://via.placeholder.com/350x250?text=No+Image+Available'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={classes.title}>
          {place.name}
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center" sx={classes.ratingBox}>
          <Rating name="read-only" value={Number(place.rating)} precision={0.5} readOnly />
          <Typography variant="subtitle1" sx={classes.subtitle}>
            {place.num_reviews} {place.num_reviews === 1 ? 'review' : 'reviews'}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" sx={classes.priceLevelBox}>
          <Typography variant="subtitle1" sx={classes.subtitle}>Price</Typography>
          <Typography gutterBottom variant="subtitle1" sx={classes.subtitle}>
            {place.price_level}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" sx={classes.rankingBox}>
          <Typography variant="subtitle1" sx={classes.subtitle}>Ranking</Typography>
          <Typography gutterBottom variant="subtitle1" sx={classes.subtitle}>
            {place.ranking}
          </Typography>
        </Box>

        {place?.awards?.map((award, i) => (
          <Box key={i} my={1} display="flex" justifyContent="space-between" alignItems="center">
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}

        <Box sx={classes.chipContainer}>
          {place?.cuisine?.map(({ name }) => (
            <Chip key={name} size="small" label={name} sx={classes.chip} />
          ))}
        </Box>

        {place?.address && (
          <Box display="flex" alignItems="center" sx={classes.infoRow}>
            <LocationOnIcon color="primary" sx={classes.icon} />
            <Typography variant="body2" color="textSecondary" sx={classes.infoText}>
              {place.address}
            </Typography>
          </Box>
        )}

        {place?.phone && (
          <Box display="flex" alignItems="center" sx={classes.infoRow}>
            <PhoneIcon color="primary" sx={classes.icon} />
            <Typography variant="body2" color="textSecondary" sx={classes.infoText}>
              {place.phone}
            </Typography>
          </Box>
        )}

        <Box sx={classes.buttonContainer}>
          {place?.web_url && (
            <Button 
              size="small" 
              color="primary" 
              onClick={() => window.open(place.web_url, '_blank')}
              sx={classes.button}
            >
              Trip Advisor
            </Button>
          )}
          {place?.website && (
            <Button 
              size="small" 
              color="primary" 
              onClick={() => window.open(place.website, '_blank')}
              startIcon={<LanguageIcon />}
              sx={classes.button}
            >
              Website
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;