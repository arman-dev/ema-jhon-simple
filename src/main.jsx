import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Shop from './assets/componants/Shop/Shop';
import Home from './assets/componants/Layout/Home';
import Orders from './assets/componants/Orders/Orders';
import Inventory from './assets/componants/Inventory/Inventory';
import Login from './assets/componants/Loging/Login';
import cartProductsLoader from './Loaders/cartProductsLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element:<Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'inventory',
        element:<Inventory></Inventory>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
