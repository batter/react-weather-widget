import React from 'react';

import DayOverview from './day_overview';

const {
  Component,
} = React;

class WeekOverview extends Component {
  contents() {
    if (this.props.data === undefined) {
      return null;
    }

    return(this.props.data.map((data, i) => {
      return( <DayOverview key={i} {...data} /> );
    }));
  }

  render () {
    if (this.props.data !== undefined) {
      return (
        <div id='week-overview'>
          <div className='labels'>
            <div className='high'>High</div>
            <div className='low'>Low</div>
            <div className='garment'>Garment</div>
          </div>
          <div className='days'>
            {this.contents()}
          </div>
          <div className='clear'></div>
        </div>
      );
    }
    else {
      return null;
    }
  }
};

export default WeekOverview;
