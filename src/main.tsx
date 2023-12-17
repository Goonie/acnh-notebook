import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

const rootNode = document.getElementById('react-app');

if (!rootNode) {
  throw new Error("The app's root node can not be found");
}

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
