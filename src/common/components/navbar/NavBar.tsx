import { useCart } from '../../../contexts/CartContext';
import { Link } from 'react-router-dom';
import { Logo } from '../index';
import { Icons } from '../../../assets/icons';
import styles from './NavBar.module.css';

const NavBar = () => {
  const { cartItems } = useCart();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={styles.links}>
        <Link to="/">home</Link>
        <Link to="/shop">shop</Link>
        <Link to="/contact">contact</Link>
      </div>
      <div className={styles.cart}>
        <Link to="/cart">
          <img src={Icons.shoppingCart} alt="Cart" />
          <span className={styles.cartBadge}>{cartItems.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
