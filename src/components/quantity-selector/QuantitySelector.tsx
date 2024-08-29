import { QuantitySelectorProps } from './QuantitySelectorModel';
import styles from './QuantitySelector.module.css';

const QuantitySelector = ({
  quantity,
  onQuantityChange,
}: QuantitySelectorProps) => {
  return (
    <div className={styles.quantitySelector}>
      <button
        onClick={() => onQuantityChange(-1)}
        className={styles.button}
        disabled={quantity <= 0}
      >
        -
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button onClick={() => onQuantityChange(1)} className={styles.button}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
