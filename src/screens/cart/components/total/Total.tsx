import styles from './Total.module.css';
import { lineItems, taxRate } from '../../../../common/constants/Constants';
import { CartItemModel } from '../../CartModel';

const Total = ({ cartItems }: { cartItems: CartItemModel[] }) => {
  const price = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
  const tax = (price * taxRate).toFixed(2);
  const shipping = 'free';
  const total = (price + parseFloat(tax)).toFixed(2);
  const lineItemValues = [tax, shipping, total];

  return (
    <div className={styles.total}>
      {lineItems.map((lineItem, i) => (
        <div key={i} className={styles.lineItem}>
          <h3>{lineItem}</h3>
          <h3>{lineItemValues[i]}</h3>
        </div>
      ))}
    </div>
  );
};

export default Total;
