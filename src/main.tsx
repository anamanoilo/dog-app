import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './index.css';
import { UomoAppThemeProvider } from './theme';
import { HomePage, ProductItemPage, ShopPage } from './pages';
import { Header } from './containers/Header';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <>
        <Header />
        <div>Error 404</div>
      </>
    ),
    children: [
      {
        errorElement: <div>Error 404</div>,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: 'shop',
            element: <ShopPage />
          },
          {
            path: 'shop/:productId',
            element: <ProductItemPage />
          },
          {
            path: 'cart',
            element: <div>cart</div>
          },
          {
            path: 'signin',
            element: <div>login/signup</div>
          }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline>
      <UomoAppThemeProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </UomoAppThemeProvider>
    </CssBaseline>
  </React.StrictMode>
);
