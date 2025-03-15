"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Weather;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const location_bar_1 = __importDefault(require("./location_bar"));
const current_conditions_1 = require("./current_conditions");
const week_overview_1 = __importDefault(require("./week_overview"));
const get_forecast_1 = __importDefault(require("./../utils/get_forecast"));
require("./../../styles.scss");
const config_json_1 = __importDefault(require("./../../config.json"));
const { API_KEY, LOCATION, } = config_json_1.default;
function Weather() {
    const [location, setLocation] = (0, react_1.useState)(LOCATION);
    const [hourly, setHourly] = (0, react_1.useState)();
    const [daily, setDaily] = (0, react_1.useState)();
    const [currently, setCurrently] = (0, react_1.useState)();
    const fetchCurentForecast = () => {
        (0, get_forecast_1.default)(handleForecastResponse);
    };
    const handleForecastResponse = (responseBody) => {
        setCurrently(responseBody.currently);
        setDaily(responseBody.daily);
        setHourly(responseBody.hourly);
    };
    const nextTemp = () => {
        return hourly?.data[0]?.temperature;
    };
    if (API_KEY !== null && currently === undefined) {
        fetchCurentForecast();
    }
    if (API_KEY !== null) {
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(location_bar_1.default, { location: location }), (0, jsx_runtime_1.jsx)(current_conditions_1.CurrentConditions, { nextTemp: nextTemp(), ...currently }), (0, jsx_runtime_1.jsx)(week_overview_1.default, { ...daily }), (0, jsx_runtime_1.jsx)("div", { className: 'clear' })] }));
    }
    else {
        return ((0, jsx_runtime_1.jsxs)("div", { children: ["Please enter your API Key for", ' ', (0, jsx_runtime_1.jsx)("a", { href: 'https://pirate-weather.apiable.io/', target: '_blank', children: "Pirate Weather" }), ' ', "in ", (0, jsx_runtime_1.jsx)("code", { children: "config.json" }), " in the project root directory"] }));
    }
}
