import {createContext, useEffect, useState} from 'react';
import {getData} from '../helper/getData';
import type {PhotoTypes} from '../types/PhotoTypes';
import {useTogglePhotoToCart} from '../hook/useTogglePhotoToCart';

export const ItemsContext = createContext({
  items: [] as PhotoTypes[],
  toggleIsFav: (id: string) => {},
  cart: [] as PhotoTypes[],
  toggleCartItems: (id: string) => {},
  clearCart: () => {},
});

type PropsType = {
  children: JSX.Element;
};

export const ItemsContextProvider = ({children}: PropsType) => {
  const [items, setItems] = useState<PhotoTypes[]>([]);
  const [cart, setCart] = useState<PhotoTypes[]>([]);

  useEffect(() => {
    const downloadData = async () => {
      const data = await getData<PhotoTypes[]>(
        'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
      );
      setItems(data);
    };
    downloadData();
  }, []);

  const toggleIsFav = (id: string) => {
    if (id) {
      const newArray = items.map((item) => {
        if (item.id === id) {
          return {...item, isFavorite: !item.isFavorite};
        } else {
          return item;
        }
      });
      setItems(newArray);
    }
  };

  const toggleCartItems = (id: string) => {
    const [newCart, newItems] = useTogglePhotoToCart(cart, items, id);
    if (newCart && newItems) {
      setCart(newCart);
      setItems(newItems);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const value = {items, toggleIsFav, cart, toggleCartItems, clearCart};

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};
