import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css';
import { UomoAppThemeProvider } from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline>
      <UomoAppThemeProvider>
        <App />
      </UomoAppThemeProvider>
    </CssBaseline>
  </React.StrictMode>
);
