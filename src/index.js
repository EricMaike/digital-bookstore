import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppContext from './AppContext';

ReactDOM.render(
  <AppContext.Provider value={'cart: []'}>
    <App />
  </AppContext.Provider>,
  document.getElementById('root')
);

