import { useContext, useState} from 'react';
import {ItemsContext} from '../../context/ItemContext';
import styled from './cart-page.module.scss';
import {CartItem} from '../../components/cart-item/cart-item.component';

export const CartPage = () => {
  const [buttonText, setButtonText] = useState('Place Order');
  const {cart, clearCart} = useContext(ItemsContext);

  const totalCost = 5.99 * cart.length;
  const totalCostDisplay = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const placeOrder = () => {
    setButtonText('Ordering...');
    setTimeout(() => {
      alert('thank you for shopping');
      setButtonText('Place Order');
      clearCart();
    }, 3000);
  };

  return (
    <main className={styled.cart}>
      <h1>Check Out</h1>
      <div className={styled.cartItemBox}>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      {cart.length > 0 ? (
        <>
          <p className={styled.totalCost}>Total : {totalCostDisplay}</p>
          <div className={styled.orderButton}>
            <button onClick={placeOrder}>{buttonText}</button>
          </div>
        </>
      ) : (
        <div className={styled.empty}>
          <h3>Your cart is Empty</h3>
        </div>
      )}
    </main>
  );
};
