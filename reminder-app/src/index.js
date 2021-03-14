import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const reminders = [
  {
    name: 'Buy some eggs',
    timestamp: "2018-11-10T13:00:00.141Z"
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App reminders={reminders} />
  </React.StrictMode>,
  document.getElementById('root')
);

