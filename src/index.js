import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './LandingPage';
import SummaryPage from './pages/SummaryPage';
import InvoicesPage from './pages/InvoicesPage';
import TransactionPage from './pages/TransactionsPage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux';
import { init } from "@rematch/core";

import * as models from "./models/core"
import Header from './components/Header';

const store = init({ models });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path="/" element={<LandingPage />} />
          <Route path="summary" element={<SummaryPage />} />
          <Route path="invoices" element={<InvoicesPage />} />
          <Route path="transactions" element={<TransactionPage />} />
        </Routes >
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
