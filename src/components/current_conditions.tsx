import numeral from 'numeral';
import { Skycons, SkyconsType } from 'react-skycons';

import GarmentSuggestion from './garment_suggestion';

import translateSkyconIconName from './../utils/translate_skycon_icon_name';

export interface CurrentConditionResponseProps {
  icon: string;
  summary: string;
  temperature: number;
  windSpeed: number;
}

export interface CurrentConditionProps extends CurrentConditionResponseProps {
  nextTemp: number | undefined;
}

export function CurrentConditions(
  { icon, nextTemp, summary, temperature, windSpeed }: CurrentConditionProps
) {
  const tempTrend = () => {
    if (nextTemp === undefined) {
      return;
    }

    if (Math.round(nextTemp) === Math.round(temperature)) {
      return 'stagnating';
    }
    else if (Math.round(nextTemp) > Math.round(temperature)) {
      return 'raising';
    }
    else {
      return 'falling'
    }
  }

  if (temperature === undefined || icon === undefined) { return null; }

  let translatedIcon = translateSkyconIconName(icon);

  return (
    <div id='current-conditions'>
      <div className='temp-and-skycon'>
        <Skycons className = 'skycon'
                 color     = 'black'
                 type      = {SkyconsType[translatedIcon as keyof typeof SkyconsType]} />
        <div className='temp-and-trend'>
          <div className='temp'>
            <span className='value'>
              {Math.round(temperature)}
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
        {summary}
      </div>
      <div className='wind'>
        <span className='label'>Wind:</span>
        {' '}
        <span className='value'>
          {numeral(windSpeed).format('0.0')}
          {' '}
          mph (S)
        </span>
      </div>
      <div className='garment-wrapper'>
        What to wear
        <GarmentSuggestion
            temperature = {temperature}
            activity    = {summary} />
      </div>
    </div>
  );
}
