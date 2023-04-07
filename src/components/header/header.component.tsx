import styled from './header.module.scss';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {ItemsContext} from '../../context/ItemContext';

export const Header = () => {
  const {cart} = useContext(ItemsContext);
  return (
    <div className={styled.header}>
      <Link to='/' className={styled.link}>
        <h2>Pic Some</h2>
      </Link>
      <Link to='/cart' className={styled.link}>
        <i className='ri-shopping-cart-line ri-fw ri-2x'></i>
        <span
          className={`${styled.itemInCart} ${
            cart.length > 0 ? styled.show : ''
          }`}>
          {cart.length}
        </span>
      </Link>
    </div>
  );
};
