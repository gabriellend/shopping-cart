import { useCart } from '../../../contexts/CartContext';
import { Link } from 'react-router-dom';
import { Logo } from '../index';
import { Icons } from '../../../assets/icons';
import './NavBar.css';

const NavBar = () => {
  const { cartItems } = useCart();
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="links">
        <Link to="/">home</Link>
        <Link to="/shop">shop</Link>
        <Link to="/contact">contact</Link>
      </div>
      <div className="cart">
        <Link to="/cart">
          <img src={Icons.shoppingCart} alt="Cart" />
          <span className="cart-badge">{cartItems.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
