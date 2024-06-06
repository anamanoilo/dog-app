import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css';
import { UomoAppThemeProvider } from './theme';
import { ProductItemPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error 404</div>
  },
  {
    path: '/products',
    element: <div>ProductList</div>
  },
  {
    path: '/products/:productId',
    element: <ProductItemPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline>
      <UomoAppThemeProvider>
        <RouterProvider router={router} />
      </UomoAppThemeProvider>
    </CssBaseline>
  </React.StrictMode>
);
