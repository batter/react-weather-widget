import React   from 'react';
import moment  from 'moment';
import Skycons from 'react-skycons';

import GarmentSuggestion from './garment_suggestion';

import translateSkyconIconName from './../utils/translate_skycon_icon_name';

const {
  Component,
} = React;

class DayOverview extends Component {
  render () {
    if (this.props.time !== undefined) {
      return (
        <div className='day'>
          <div className='day-of-week'>
            {moment(this.props.time, 'X').format('ddd')}
          </div>
          <Skycons className = 'skycon'
                   color     = 'black'
                   type      = {translateSkyconIconName(this.props.icon)} />
          <div className='temps'>
            <div className='high'>
              {Math.round(this.props.temperatureMax)}
              &deg;
            </div>
            <div className='low'>
              {Math.round(this.props.temperatureMin)}
              &deg;
            </div>
          </div>
          <GarmentSuggestion
              temperature = {this.props.temperatureMax}
              activity    = {this.props.summary} />
        </div>
      );
    }
    else {
      return null;
    }
  }
};

export default DayOverview;
