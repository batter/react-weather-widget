"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
// Takes an icon name format returned from Forecast.IO and converts it
// a format that is consumable by the Skycons npm library
function default_1(forecastIconName) {
    return forecastIconName.toUpperCase().replace(/-/g, '_');
}
;
