import translateSkyconIconName from './../../js/utils/translate_skycon_icon_name';

import _ from 'lodash';

let forecastIOReturnFormats = ['partly-cloudy-night', 'clear-day', 'rain'];
let skyconNameFormats = ['PARTLY_CLOUDY_NIGHT', 'CLEAR_DAY', 'RAIN'];

describe('translateSkyconIconName', function () {
  it('should upcase and snake-case the names', function (done) {
    forecastIOReturnFormats.map((name, i) => {
      translateSkyconIconName(name).should.equal(skyconNameFormats[i]);
    });

    done();
  });
});
