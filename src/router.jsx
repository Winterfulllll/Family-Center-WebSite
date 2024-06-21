import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import OtherPage from './pages/OtherPage/OtherPage';

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

export default function Router() {
  return <RouterProvider router={router} />;
}
