import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('react-root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NewApp = require('./app').default;
    render(NewApp);
  });
}
