import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter.js';
// import registerServiceWorker from './registerServiceWorker';

//RENDER MAIN APP COMPONENT
ReactDOM.render(
  <AppRouter/>,
  document.getElementById('root'));
    // registerServiceWorker();
