import {PhotoTypes} from '../types/PhotoTypes';

export const useTogglePhotoToCart = (
  cartArray: PhotoTypes[],
  itemsArray: PhotoTypes[],
  photoID: string
) => {
  const checkIfItemIsOnCart = cartArray.find((photo) => photo.id === photoID);
  if (checkIfItemIsOnCart) {
    const newCart = cartArray.filter((photo) => photo.id !== photoID);
    const newItems = itemsArray.map((item) => {
      if (item.id === photoID) {
        return {...item, onCart: false};
      } else {
        return item;
      }
    });
    return [newCart, newItems];
  } else {
    const findItem = itemsArray.find((photo) => photo.id === photoID);
    let newCart, newItems;
    if (findItem) {
      newCart = [...cartArray, findItem];
      newItems = itemsArray.map((item) => {
        if (item.id === photoID) {
          return {...item, onCart: true};
        } else {
          return item;
        }
      });
    }
    return [newCart, newItems];
  }
};
