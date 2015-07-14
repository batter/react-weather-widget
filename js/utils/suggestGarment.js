import _ from 'lodash';

// Takes a temperature (in Farenheit) and returns a corresponding suggested
// garment for a person based on the temperature
export default function(temp, pattern) {
  pattern = pattern.toLowerCase();

  function rainGarment()
  {
    return _.sample(['Rain Coat', 'Umbrella', 'Rain Boots']);
  }

  if (temp <= 40) {
    return 'Winter Coat';
  }
  else if (temp > 40 && temp <= 50) {
    return 'Fall Jacket';
  }
  else if (temp > 50 && temp <= 60) {
    if (pattern.search('rain') >= 0) {
      return rainGarment();
    }
    else {
      return 'Light Jacket';
    }
  }
  else if (temp > 60 && temp <= 70) {
    if (pattern.search('rain') >= 0) {
      return rainGarment();
    }
    else {
      return 'Sweater';
    }
  }
  else if (temp > 70 && temp <= 82) {
    if (pattern.search('rain') >= 0) {
      return rainGarment();
    }
    else {
      return 'T-Shirt';
    }
  }
  else if (temp > 82 && temp <= 95) {
    return 'Bathing Suit';
  }
  else {
    return 'Birthday Suit';
  }
};
