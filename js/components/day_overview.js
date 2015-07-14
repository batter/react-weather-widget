import React   from 'react';
import moment  from 'moment';
import Skycons from 'react-skycons';

const {
  Component,
} = React;

class DayOverview extends Component {
  constructor (props) {
    super(props);

    console.log(props);
  }

  skyconIconName() {
    if (this.props.icon === undefined) {
      return null;
    }
    let value = this.props.icon.toUpperCase();
    return value.replace(/-/g, '_');
  }

  render () {
    if (this.props.time !== undefined) {
      return (
        <div className='day'>
          <div className='day-of-week'>
            {moment(this.props.time, 'X').format('ddd')}
          </div>
          <Skycons className='skycon' color='black' icon={this.skyconIconName()} />
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
