import styled from './image.module.scss';
import {PhotoTypes} from '../../types/PhotoTypes';

type PropsType = {
  addedClass: string | undefined;
  item: PhotoTypes;
  toggleIsFav: (id: string) => void;
  toggleCartItems: (id: string) => void;
};

export const Image = ({
  addedClass,
  item,
  toggleIsFav,
  toggleCartItems,
}: PropsType) => {
  const {id, url, isFavorite, onCart} = item;

  const handleFav = () => {
    toggleIsFav(id);
  };
  const handleItemToCart = () => {
    toggleCartItems(id);
  };

  return (
    <div className={`${addedClass && styled[addedClass]} ${styled.container}`}>
      <div className={styled.icons}>
        <i
          className={`${
            isFavorite ? 'ri-heart-fill' : 'ri-heart-line favorite'
          } ${styled.heart}`}
          onClick={handleFav}></i>
        <i
          className={`${
            onCart && onCart
              ? 'ri-checkbox-circle-fill '
              : 'ri-add-circle-line cart'
          }`}
          onClick={handleItemToCart}></i>
      </div>
      <img src={url} className={styled.imageGrid} />
    </div>
  );
};
