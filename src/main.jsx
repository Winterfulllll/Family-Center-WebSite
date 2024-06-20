import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import OtherPage from './pages/OtherPage/OtherPage';

import './index.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/other',
      element: <OtherPage />,
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
