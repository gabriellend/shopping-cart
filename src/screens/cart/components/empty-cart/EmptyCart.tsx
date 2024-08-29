import { Link } from 'react-router-dom';
import { Button } from '../../../../common/components';
import './EmptyCart.css';

const EmptyCart = () => {
  return (
    <div className="empty-cart-message">
      <h1>Your cart is empty</h1>
      <div className="divider"></div>
      <p>It looks like you haven't added anything to your cart yet.</p>
      <Link to="/shop">
        <Button className={'btn-primary'} to={'/shop'}>
          Start Shopping
        </Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
