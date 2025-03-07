import React from 'react';

const LocationBar = (props) => {
  return (
    <div id='location-bar'>
      <h3>Weather for {props.location}</h3>
    </div>
  );
};

export default LocationBar;
