import { Link } from 'react-router-dom';
import { Button } from '../../../../common/components';
import styles from './EmptyCart.module.css';

const EmptyCart = () => {
  return (
    <div className={styles.emptyCartMessage}>
      <h1>Your cart is empty</h1>
      <div className={styles.divider}></div>
      <p>It looks like you haven't added anything to your cart yet.</p>
      <Link to="/shop">
        <Button variant="primary" to={'/shop'}>
          Start Shopping
        </Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
