import React   from 'react';
import moment  from 'moment';
import Skycons from 'react-skycons';

import translateSkyconIconName from './../utils/translateSkyconIconName';

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
                   icon      = {translateSkyconIconName(this.props.icon)} />
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
        </div>
      );
    }
    else {
      return null;
    }
  }
};

export default DayOverview;
