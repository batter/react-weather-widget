"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LocationBar;
const jsx_runtime_1 = require("react/jsx-runtime");
function LocationBar({ location }) {
    return ((0, jsx_runtime_1.jsx)("div", { id: 'location-bar', children: (0, jsx_runtime_1.jsxs)("h3", { children: ["Weather for ", location] }) }));
}
