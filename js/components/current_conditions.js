"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CurrentConditions;
const jsx_runtime_1 = require("react/jsx-runtime");
const numeral_1 = __importDefault(require("numeral"));
const react_skycons_1 = require("react-skycons");
const garment_suggestion_1 = __importDefault(require("./garment_suggestion"));
const translate_skycon_icon_name_1 = __importDefault(require("./../utils/translate_skycon_icon_name"));
function CurrentConditions({ icon, nextTemp, summary, temperature, windSpeed }) {
    const tempTrend = () => {
        if (Math.round(nextTemp) === Math.round(temperature)) {
            return 'stagnating';
        }
        else if (Math.round(nextTemp) > Math.round(temperature)) {
            return 'raising';
        }
        else {
            return 'falling';
        }
    };
    // Don't print until props are passed down
    if (temperature !== undefined && icon !== undefined) {
        let translatedIcon = (0, translate_skycon_icon_name_1.default)(icon);
        return ((0, jsx_runtime_1.jsxs)("div", { id: 'current-conditions', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'temp-and-skycon', children: [(0, jsx_runtime_1.jsx)(react_skycons_1.Skycons, { className: 'skycon', color: 'black', type: react_skycons_1.SkyconsType[translatedIcon] }), (0, jsx_runtime_1.jsxs)("div", { className: 'temp-and-trend', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'temp', children: [(0, jsx_runtime_1.jsx)("span", { className: 'value', children: Math.round(temperature) }), (0, jsx_runtime_1.jsx)("span", { className: 'degree-symbol', children: "\u00B0" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'trend', children: ["and", ' ', tempTrend()] })] }), (0, jsx_runtime_1.jsx)("div", { className: 'clear' })] }), (0, jsx_runtime_1.jsx)("div", { className: 'summary', children: summary }), (0, jsx_runtime_1.jsxs)("div", { className: 'wind', children: [(0, jsx_runtime_1.jsx)("span", { className: 'label', children: "Wind:" }), ' ', (0, jsx_runtime_1.jsxs)("span", { className: 'value', children: [(0, numeral_1.default)(windSpeed).format('0.0'), ' ', "mph (S)"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'garment-wrapper', children: ["What to wear", (0, jsx_runtime_1.jsx)(garment_suggestion_1.default, { temperature: temperature, activity: summary })] })] }));
    }
    else {
        return null;
    }
}
