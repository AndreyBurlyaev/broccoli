import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import components from './components';

const container = document.getElementById('root');

const Component = components[window.initState.componentName];

ReactDOMClient.hydrateRoot(
  container,
  <App>
    <Component {...window.initState} />
  </App>,
);
