"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const weather_1 = __importDefault(require("./components/weather"));
window.React = react_1.default;
const root = (0, client_1.createRoot)(document.getElementById('application'));
root.render(react_1.default.createElement(weather_1.default));
