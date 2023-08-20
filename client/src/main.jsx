import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux';
import {store} from './app/store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './features/api/apiSlice.jsx';
import App from './App.jsx'
import './index.css'
import 'rsuite/dist/rsuite.min.css';
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
    <Provider  store={store}>
    <App />
    </Provider>
    </ApiProvider>
  </React.StrictMode>,
)
