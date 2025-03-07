import React   from 'react';
import numeral from 'numeral';
import Skycons from 'react-skycons';

import GarmentSuggestion from './garment_suggestion';

import translateSkyconIconName from './../utils/translate_skycon_icon_name';

const CurrentConditions = (props) => {
  const skyconIconName = () => {
    if (props.icon === undefined) {
      return null;
    }

    let value = props.icon.toUpperCase();
    return value.replace(/-/g, '_');
  }

  const tempTrend = () => {
    if (Math.round(props.nextTemp) === Math.round(props.temperature)) {
      return 'stagnating';
    }
    else if (Math.round(props.nextTemp) > Math.round(props.temperature)) {
      return 'raising';
    }
    else {
      return 'falling'
    }
  }

  // Don't print until props are passed down
  if (props.temperature !== undefined) {
    return (
      <div id='current-conditions'>
        <div className='temp-and-skycon'>
          <Skycons className = 'skycon'
                   color     = 'black'
                   icon      = {translateSkyconIconName(props.icon)} />
          <div className='temp-and-trend'>
            <div className='temp'>
              <span className='value'>
                {Math.round(props.temperature)}
              </span>
              <span className='degree-symbol'>
                &deg;
              </span>
            </div>
            <div className='trend'>
              and
              {' '}
              {tempTrend()}
            </div>
          </div>
          <div className='clear'></div>
        </div>
        <div className='summary'>
          {props.summary}
        </div>
        <div className='wind'>
          <span className='label'>Wind:</span>
          {' '}
          <span className='value'>
            {numeral(props.windSpeed).format('0.0')}
            {' '}
            mph (S)
          </span>
        </div>
        <div className='garment-wrapper'>
          What to wear
          <GarmentSuggestion
              temperature = {props.temperature}
              activity    = {props.summary} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CurrentConditions;
