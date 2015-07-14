// Takes an icon name format returned from Forecast.IO and converts it
// a format that is consumable by the Skycons npm library
export default function(forecastIconName) {
  return forecastIconName.toUpperCase().replace(/-/g, '_');
};
