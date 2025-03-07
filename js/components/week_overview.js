import React from 'react';

import DayOverview from './day_overview';

const WeekOverview = (props) => {
  const contents = () => {
    return(props.data?.map((data, i) => {
      return( <DayOverview key={i} {...data} /> );
    }));
  }

  if (props.data !== undefined) {
    return (
      <div id='week-overview'>
        <div className='labels'>
          <div className='high'>High</div>
          <div className='low'>Low</div>
          <div className='garment'>Garment</div>
        </div>
        <div className='days'>
          {contents()}
        </div>
        <div className='clear'></div>
      </div>
    );
  }
  else {
    return null;
  }
};

export default WeekOverview;
