import { DayOverview, DayOverviewProps } from './day_overview';

interface WeekOverviewProps {
  data: Array<DayOverviewProps>;
}

export default function WeekOverview({ data }: WeekOverviewProps) {
  if (data !== undefined) {
    const contents = () => {
      return(data.map((data: DayOverviewProps, i: number) => {
        return(<DayOverview key={i} {...data} />);
      }));
    }

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
}
