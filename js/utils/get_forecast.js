"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const config_json_1 = __importDefault(require("./../../config.json"));
const { API_KEY, LATITUDE, LONGITUDE, } = config_json_1.default;
// fetches a forecast response from Pirateweather.net via SuperAgent
function default_1(callback, lat, lon) {
    if (API_KEY === null) {
        return;
    }
    lat = lat || LATITUDE;
    lon = lon || LONGITUDE;
    let coords = [lat, lon].join(',');
    let uri = 'https://api.pirateweather.net/forecast/' + API_KEY + '/' + coords;
    fetch(uri)
        .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
        .then(callback)
        .catch((error) => console.error(`Error: ${error}`));
}
;
