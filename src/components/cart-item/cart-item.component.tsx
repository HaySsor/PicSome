import {useContext} from 'react';
import {ItemsContext} from '../../context/ItemContext';
import {PhotoTypes} from '../../types/PhotoTypes';
import styled from './cart-item.module.scss';

type PropsType = {
  item: PhotoTypes;
};

export const CartItem = ({item}: PropsType) => {
  const {url, id} = item;

  const {toggleCartItems} = useContext(ItemsContext);

  const handleDeleteItem = () => {
    toggleCartItems(id);
  };

  return (
    <div className={styled.cartItem}>
      <img src={url} alt='' />
      <p>$5.99</p>
      <i
        className={`${'ri-delete-bin-line'} ${styled.icon}`}
        onClick={handleDeleteItem}></i>
    </div>
  );
};
