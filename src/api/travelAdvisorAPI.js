import axios from 'axios';

// Base URLs for the APIs
const TRAVEL_ADVISOR_URL = 'https://travel-advisor.p.rapidapi.com';
const OPEN_WEATHER_URL = 'https://community-open-weather-map.p.rapidapi.com/weather';

// RapidAPI Host and Key - in a real project, these would be in environment variables
const RAPID_API_HOST = 'travel-advisor.p.rapidapi.com';
const RAPID_API_KEY = 'YOUR_RAPID_API_KEY'; // Replace with your actual RapidAPI key

// Helper function to create API options for RapidAPI
const createRapidAPIOptions = (host) => ({
  headers: {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': host,
  },
});

/**
 * Fetches places data from the Travel Advisor API
 * @param {string} type - Type of place (restaurants, hotels, attractions)
 * @param {object} sw - Southwest boundary coordinates
 * @param {object} ne - Northeast boundary coordinates
 * @returns {Promise<Array>} - Promise resolving to an array of places
 */
export const getPlacesData = async (type, sw, ne) => {
  try {
    // Ensure we have valid bounds
    if (!sw || !ne) return [];
    
    const { data: { data } } = await axios.get(`${TRAVEL_ADVISOR_URL}/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_latitude: ne.lat,
        tr_longitude: ne.lng,
        limit: '30',
        currency: 'USD',
        lunit: 'km',
        lang: 'en_US',
      },
      ...createRapidAPIOptions(RAPID_API_HOST),
    });

    return data || [];
  } catch (error) {
    console.error(`Error fetching ${type} data:`, error);
    return [];
  }
};

/**
 * Fetches weather data from the Open Weather Map API
 * @param {number} lat - Latitude
 * @param {number} lng - Longitude
 * @returns {Promise<Object>} - Promise resolving to weather data
 */
export const getWeatherData = async (lat, lng) => {
  try {
    if (!lat || !lng) return null;
    
    const { data } = await axios.get(OPEN_WEATHER_URL, {
      params: {
        lat,
        lon: lng,
        units: 'metric',
      },
      headers: {
        'X-RapidAPI-Key': RAPID_API_KEY,
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};