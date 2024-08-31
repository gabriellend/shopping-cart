import styles from './CartItem.module.css';
import { InventoryItemModel, CartItemModel } from '../../../../models';
import {
  ItemImage,
  SizeContainer,
  QuantitySelector,
} from '../../../../common/components';
import { useCart } from '../../../../contexts';
import { useSize } from '../../../../hooks';

const CartItem = ({ item }: InventoryItemModel | CartItemModel) => {
  const { selectedSize, setSelectedSize } = useSize<string | null>(item.size);
  const { updateItemQuantity } = useCart();

  const handleQuantityChange = (delta: number) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity >= 1) {
      updateItemQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.leftView}>
        <div className={styles.imageWrapper}>
          <ItemImage item={item} />
        </div>
        <div className={styles.info}>
          <h2>{item.title}</h2>
          <SizeContainer
            item={item}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <QuantitySelector
            quantity={item.quantity}
            onQuantityChange={handleQuantityChange}
          />
        </div>
      </div>
      <div className={styles.rightView}>
        <h2>{item.price}</h2>
      </div>
    </div>
  );
};

export default CartItem;
