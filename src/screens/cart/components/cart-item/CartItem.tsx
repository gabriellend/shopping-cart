import styles from './CartItem.module.css';
import { InventoryItemModel, CartItemModel } from '../../../../models';
import { ItemImage, SizeContainer } from '../../../../common/components';
import { useState } from 'react';
import QuantitySelector from '../../../../components/quantity-selector/QuantitySelector';
import { useCart } from '../../../../contexts';

const CartItem = ({ item }: InventoryItemModel | CartItemModel) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(item.size);
  const { updateItemQuantity } = useCart();

  const handleQuantityChange = (delta: number) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity >= 0) {
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
