import { useCart } from '../../contexts';
import CartItem from './components/cart-item/CartItem';
import { taxRate, lineItems } from '../../common/constants/Constants';
import styles from './Cart.module.css';
import EmptyCart from './components/empty-cart/EmptyCart';

const Cart = () => {
  const { cartItems } = useCart();
  const price = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
  const tax = (price * taxRate).toFixed(2);
  const shipping = 'free';
  const total = (price + parseFloat(tax)).toFixed(2);
  const lineItemValues = [tax, shipping, total];

  return (
    <div className={styles.cart}>
      {cartItems.length > 0 ? (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className={styles.total}>
            {lineItems.map((lineItem, i) => (
              <div key={i} className={styles.lineItem}>
                <h3>{lineItem}</h3>
                <h3>{lineItemValues[i]}</h3>
              </div>
            ))}
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
