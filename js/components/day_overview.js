import React   from 'react';
import moment  from 'moment';
import Skycons from 'react-skycons';

import GarmentSuggestion from './garment_suggestion';

import translateSkyconIconName from './../utils/translate_skycon_icon_name';

const DayOverview = (props) => {
  if (props.time !== undefined) {
    return (
      <div className='day'>
        <div className='day-of-week'>
          {moment(props.time, 'X').format('ddd')}
        </div>
        <Skycons className = 'skycon'
                 color     = 'black'
                 type      = {translateSkyconIconName(props.icon)} />
        <div className='temps'>
          <div className='high'>
            {Math.round(props.temperatureMax)}
            &deg;
          </div>
          <div className='low'>
            {Math.round(props.temperatureMin)}
            &deg;
          </div>
        </div>
        <GarmentSuggestion
            temperature = {props.temperatureMax}
            activity    = {props.summary} />
      </div>
    );
  } else {
    return null;
  }
};

export default DayOverview;
