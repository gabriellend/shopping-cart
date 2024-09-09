import { useCart } from 'src/contexts';
import { Link } from 'react-router-dom';
import { Logo } from '../index';
import { Icons } from '../../../assets/icons';
import styles from './NavBar.module.css';

const NavBar = () => {
  const { cartItems } = useCart();
  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <div className={styles.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className={styles.cart}>
        <Link to="/cart">
          <img
            src={Icons.shoppingCart}
            alt={`Cart with ${cartItems.length} item${cartItems.length !== 1 ? 's' : ''}`}
          />
          <span className={styles.cartBadge}>{cartItems.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
