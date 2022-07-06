import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './LandingPage';

import { Provider } from 'react-redux';
import { init } from "@rematch/core";

import * as models from "./models/core"

const store = init({ models });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <LandingPage />
    </React.StrictMode>
  </Provider>
);
