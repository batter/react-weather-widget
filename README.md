![Image of Weather App](screenshot.png "Weather App")

# Project Description

As a New Yorker, we find changes in weather to be a part of life. To be ready
for the surprise each day, it would be helpful to know what the day will bring.
Create a React/Flux application to forecast the weather and suggest clothing or
accessories that may be required.


## Goals

- Implement an application for live updates of weather
- Display a high level week view
- Display a day view
- Describe weather by activity and temperature
- Offer a garment or accessory for the day
- Sequence by time


## Expectations

- Use node package management
- Base application on React and Flux frameworks
- Leverage [Pirateweather.net Api](https://pirateweather.net/) for data
- Test with Mocha or Jest

## Quick Start

First, get an API key from [Pirate Weather](https://pirate-weather.apiable.io/)
and plug it into `config.json` as the value for the `api-key` attribute.

Then run these commands in your console:


```
$ npm install
$ npm run watch
```

The application can be accessed by visiting `http://localhost:8080` in your browser

You can also modify the location in `config.json` if you wish to see weather for locations beyond New York

## Testing

    $ npm test
