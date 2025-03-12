"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const superagent_1 = __importDefault(require("superagent"));
const config_json_1 = __importDefault(require("./../../config.json"));
const { api_key, latitude, longitude, } = config_json_1.default;
// fetches a forecast response from Pirateweather.net via SuperAgent
function default_1(callback, lat, lon) {
    if (config_json_1.default.api_key === null) {
        return;
    }
    lat = lat || latitude;
    lon = lon || longitude;
    let coords = [lat, lon].join(',');
    let uri = 'https://api.pirateweather.net/forecast/' + api_key + '/' + coords;
    superagent_1.default
        .get(uri)
        .end(callback);
}
;
