import { useCart } from '../../contexts';
import './Cart.css';

const Cart = () => {
  const { cartItems, setCartItems } = useCart();
  return (
    <div className="cart">
      {cartItems.map((item) => (
        <CartItem />
      ))}
    </div>
  );
};

export default Cart;
