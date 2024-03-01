import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/Home';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Basket from './basket/Basket';
import NotFound from './not-found-error/NotFound';
import BasketProvider from './basket/BasketProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './product/ProductList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <ProductList />
      },
      {
        path: 'basket',
        element: <Basket />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BasketProvider>
      <RouterProvider router={router} />
    </BasketProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
