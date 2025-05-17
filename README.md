Travel Advisor
Overview
Travel Advisor is a comprehensive web application that helps users find restaurants, hotels, and attractions based on location. The app integrates Google Maps, geolocation features, and data from the Travel Advisor and Open Weather Map APIs to provide a seamless travel planning experience.
Features

Interactive map with markers for places and weather information
Real-time geolocation to find places near you
Search for specific locations worldwide
Filter places by type (restaurants, hotels, attractions)
Filter places by rating
Detailed place information including reviews, pricing, and contact details
Weather information for the selected location
Responsive design that works across all devices

Technologies Used

React 18
Material UI 5
Google Maps API
Travel Advisor API via RapidAPI
Open Weather Map API via RapidAPI
Axios for API requests

Setup Instructions

Clone the repository

bashgit clone https://github.com/yourusername/travel-advisor.git
cd travel-advisor

Install dependencies

bashnpm install

Create a .env file in the root directory and add your API keys:

REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_RAPID_API_KEY=your_rapid_api_key

Start the development server

bashnpm start

Open http://localhost:3000 to view the app in your browser

Important Notes

You need to get API keys from:

Google Maps JavaScript API
RapidAPI for both Travel Advisor API and Open Weather Map API



API References

Travel Advisor API
Open Weather Map API

Deployment
The app can be deployed using:
bashnpm run build
This creates an optimized production build in the build folder that can be deployed to hosting services like Netlify, Vercel, or GitHub Pages.
License
This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgements

Based on a project design by JavaScript Mastery