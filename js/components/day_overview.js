"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DayOverview;
const jsx_runtime_1 = require("react/jsx-runtime");
const moment_1 = __importDefault(require("moment"));
const react_skycons_1 = require("react-skycons");
const garment_suggestion_1 = __importDefault(require("./garment_suggestion"));
const translate_skycon_icon_name_1 = __importDefault(require("./../utils/translate_skycon_icon_name"));
function DayOverview({ icon, summary, time, temperatureMax, temperatureMin }) {
    if (time !== undefined && icon !== undefined) {
        let translatedIcon = (0, translate_skycon_icon_name_1.default)(icon);
        return ((0, jsx_runtime_1.jsxs)("div", { className: 'day', children: [(0, jsx_runtime_1.jsx)("div", { className: 'day-of-week', children: (0, moment_1.default)(time, 'X').format('ddd') }), (0, jsx_runtime_1.jsx)(react_skycons_1.Skycons, { className: 'skycon', color: 'black', type: react_skycons_1.SkyconsType[translatedIcon] }), (0, jsx_runtime_1.jsxs)("div", { className: 'temps', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'high', children: [Math.round(temperatureMax), "\u00B0"] }), (0, jsx_runtime_1.jsxs)("div", { className: 'low', children: [Math.round(temperatureMin), "\u00B0"] })] }), (0, jsx_runtime_1.jsx)(garment_suggestion_1.default, { temperature: temperatureMax, activity: summary })] }));
    }
    else {
        return null;
    }
}
