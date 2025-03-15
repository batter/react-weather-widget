"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WeekOverview;
const jsx_runtime_1 = require("react/jsx-runtime");
const day_overview_1 = require("./day_overview");
function WeekOverview({ data }) {
    if (data !== undefined) {
        const contents = () => {
            return (data.map((data, i) => {
                return ((0, jsx_runtime_1.jsx)(day_overview_1.DayOverview, { ...data }, i));
            }));
        };
        return ((0, jsx_runtime_1.jsxs)("div", { id: 'week-overview', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'labels', children: [(0, jsx_runtime_1.jsx)("div", { className: 'high', children: "High" }), (0, jsx_runtime_1.jsx)("div", { className: 'low', children: "Low" }), (0, jsx_runtime_1.jsx)("div", { className: 'garment', children: "Garment" })] }), (0, jsx_runtime_1.jsx)("div", { className: 'days', children: contents() }), (0, jsx_runtime_1.jsx)("div", { className: 'clear' })] }));
    }
    else {
        return null;
    }
}
