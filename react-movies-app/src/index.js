import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom"
import Details from './components/Details';
import List from './components/List';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/list',
    element: <List/>
  },
  {
    path: '/details',
    element: <Details/>
  },
  {
    path: '/',
    element: <Navigate to={'/list'}/>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
