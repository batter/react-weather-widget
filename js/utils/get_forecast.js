"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const superagent_1 = __importDefault(require("superagent"));
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
    superagent_1.default
        .get(uri)
        .end(callback);
}
;
