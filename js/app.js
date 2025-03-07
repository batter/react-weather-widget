import React from 'react';
import ReactDOM from 'react-dom';

import Weather from './components/weather';

window.React = React;

ReactDOM.render(<Weather />, document.getElementById('application'));
