import React from 'react';

const {
  Component,
} = React;

class LocationBar extends Component {
  render () {
    return (
      <div id='location-bar'>
        <h3>Weather for {this.props.location}</h3>
      </div>
    );
  }
};

export default LocationBar;
