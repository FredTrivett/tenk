import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './ui/ErrorPage';
import { fetchFilmData } from './lib/loaders'; // Make sure this path is correct
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    // errorElement: <ErrorPage />,
    element: <Root />,
    loader: fetchFilmData,
    // children: [
    //   {
    //     path: '/buy',
    //     element: <Buy />,
    //     loader: buyLoader
    //   },
    // ],
  }
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}
