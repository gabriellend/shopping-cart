import { useCart } from '../../contexts';
import CartItem from './components/cart-item/CartItem';
import styles from './Cart.module.css';
import EmptyCart from './components/empty-cart/EmptyCart';
import Total from './components/total/Total';

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className={styles.cart}>
      {cartItems.length > 0 ? (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <Total cartItems={cartItems} />
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
