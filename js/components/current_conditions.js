import React   from 'react';
import numeral from 'numeral';
import Skycons from 'react-skycons';

import GarmentSuggestion from './garment_suggestion';

import translateSkyconIconName from './../utils/translate_skycon_icon_name';

const {
  Component,
} = React;

class CurrentConditions extends Component {
  skyconIconName() {
    if (this.props.icon === undefined) {
      return null;
    }
    let value = this.props.icon.toUpperCase();
    return value.replace(/-/g, '_');
  }

  tempTrend() {
    if (Math.round(this.props.nextTemp) === Math.round(this.props.temperature)) {
      return 'stagnating';
    }
    else if (Math.round(this.props.nextTemp) > Math.round(this.props.temperature)) {
      return 'raising';
    }
    else {
      return 'falling'
    }
  }

  render () {
    // Don't print until props are passed down
    if (this.props.temperature !== undefined) {
      return (
        <div id='current-conditions'>
          <div className='temp-and-skycon'>
            <Skycons className = 'skycon'
                     color     = 'black'
                     icon      = {translateSkyconIconName(this.props.icon)} />
            <div className='temp-and-trend'>
              <div className='temp'>
                <span className='value'>
                  {Math.round(this.props.temperature)}
                </span>
                <span className='degree-symbol'>
                  &deg;
                </span>
              </div>
              <div className='trend'>
                and
                {' '}
                {this.tempTrend()}
              </div>
            </div>
            <div className='clear'></div>
          </div>
          <div className='summary'>
            {this.props.summary}
          </div>
          <div className='wind'>
            <span className='label'>Wind:</span>
            {' '}
            <span className='value'>
              {numeral(this.props.windSpeed).format('0.0')}
              {' '}
              mph (S)
            </span>
          </div>
          <div className='garment-wrapper'>
            What to wear
            <GarmentSuggestion
                temperature = {this.props.temperature}
                activity    = {this.props.summary} />
          </div>
        </div>
      );
    }
    else {
      return null;
    }
  }
};

export default CurrentConditions;
