import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { CssBaseline } from '@mui/material';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <>
    <CssBaseline />
    <App />
  </>,

);
