import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// eslint-disable-next-line
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <App />
    <Analytics />
  </React.Fragment>,
);
