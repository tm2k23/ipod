/* This is the index.js file and is the entry point of the app ,
App component is rendered from here*/

import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css'; // importing index.css file
import './stylesheets/menuStyle.css'; // importing the menu list style
import App from './App'; // importing App component

ReactDOM.render(
  <React.StrictMode>
    {/* render App component */}
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

