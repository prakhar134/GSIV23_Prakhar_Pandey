import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom"
import { Provider } from "react-redux";
import Details from './routes/Details';
import List from './routes/List';
import store from './store';

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
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
