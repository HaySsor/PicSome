import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'remixicon/fonts/remixicon.css';
import {RouterProvider} from 'react-router-dom';
import {router} from './router/router';
import {ItemsContextProvider} from './context/ItemContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ItemsContextProvider>
      <RouterProvider router={router} />
    </ItemsContextProvider>
  </React.StrictMode>
);
