// src/data/city-traffic-data.js
import cityData from './city-traffic-data.json'

export const cityTrafficData = cityData;

// Helper function to get all cities' heat points for a specific time
export const getCityHeatPoints = (hour) => {
  return Object.values(cityTrafficData).map(city => ({
    lat: city.coordinates[1],
    lng: city.coordinates[0],
    intensity: city.trafficByHour[hour.toString()] / 100 // Normalize to 0-1
  }));
};