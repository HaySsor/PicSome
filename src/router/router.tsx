import {createBrowserRouter} from 'react-router-dom';
import {App} from '../App';
import {CartPage} from '../pages/cart-page/cart-page.component';
import {PhotosPage} from '../pages/photos-page/photos-page.component';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <PhotosPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
]);
