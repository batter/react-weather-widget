"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
// Takes a temperature (in Farenheit) and pattern (string)
// and returns a corresponding suggested garment for a person based on the temperature
function default_1(temp, pattern) {
    pattern = pattern.toLowerCase();
    function rainGarment() {
        return ['Rain Coat', 'Umbrella', 'Rain Boots', 'Poncho'].at(Math.floor(4 * Math.random()));
    }
    if (temp <= 40) {
        return 'Winter Coat';
    }
    else if (temp > 40 && temp <= 50) {
        return 'Fall Jacket';
    }
    else if (temp > 50 && temp <= 60) {
        if (pattern.search('rain') >= 0) {
            return rainGarment();
        }
        else {
            return 'Light Jacket';
        }
    }
    else if (temp > 60 && temp <= 70) {
        if (pattern.search('rain') >= 0) {
            return rainGarment();
        }
        else {
            return 'Sweater';
        }
    }
    else if (temp > 70 && temp <= 82) {
        if (pattern.search('rain') >= 0) {
            return rainGarment();
        }
        else {
            return 'T-Shirt';
        }
    }
    else if (temp > 82 && temp <= 95) {
        if (pattern.search('rain') >= 0) {
            return rainGarment();
        }
        else {
            return 'Bathing Suit';
        }
    }
    else {
        return 'Birthday Suit';
    }
}
;
