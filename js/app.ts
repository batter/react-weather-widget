import React from 'react';
import { createRoot } from 'react-dom/client';

// @ts-ignore
import Weather from './components/weather';

window.React = React;

const root = createRoot(document.getElementById('application')!);
root.render(React.createElement(Weather));
