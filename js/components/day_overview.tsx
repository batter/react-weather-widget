import moment from 'moment';
import { Skycons, SkyconsType } from 'react-skycons';

import GarmentSuggestion from './garment_suggestion';

import translateSkyconIconName from './../utils/translate_skycon_icon_name';

export interface DayOverviewProps {
  icon: string;
  summary: string;
  time: number;
  temperatureMax: number;
  temperatureMin: number;
}

export function DayOverview(
  { icon, summary, time, temperatureMax, temperatureMin }: DayOverviewProps
) {
  if (time !== undefined && icon !== undefined) {
    let translatedIcon = translateSkyconIconName(icon);

    return (
      <div className='day'>
        <div className='day-of-week'>
          {moment(time, 'X').format('ddd')}
        </div>
        <Skycons className = 'skycon'
                 color     = 'black'
                 type      = {SkyconsType[translatedIcon as keyof typeof SkyconsType]} />
        <div className='temps'>
          <div className='high'>
            {Math.round(temperatureMax)}
            &deg;
          </div>
          <div className='low'>
            {Math.round(temperatureMin)}
            &deg;
          </div>
        </div>
        <GarmentSuggestion
            temperature = {temperatureMax}
            activity    = {summary} />
      </div>
    );
  } else {
    return null;
  }
}
