import React from 'react';

import suggestGarment from './../utils/suggest_garment';

const {
  Component,
} = React;

class GarmentSuggestion extends Component {
  render () {
    if (this.props.temperature !== undefined) {
      return (
        <div className='garment-suggestion'>
          {suggestGarment(this.props.temperature, this.props.activity)}
        </div>
      );
    }
    else {
      return null;
    }
  }
};

export default GarmentSuggestion;
