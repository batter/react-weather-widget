"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GarmentSuggestion;
const jsx_runtime_1 = require("react/jsx-runtime");
const suggest_garment_1 = __importDefault(require("./../utils/suggest_garment"));
function GarmentSuggestion({ temperature, activity }) {
    if (temperature !== undefined) {
        return ((0, jsx_runtime_1.jsx)("div", { className: 'garment-suggestion', children: (0, suggest_garment_1.default)(temperature, activity) }));
    }
    else {
        return null;
    }
}
