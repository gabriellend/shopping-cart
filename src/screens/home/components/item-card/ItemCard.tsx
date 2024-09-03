import { InventoryItemModel } from './ItemCardModel';
import styles from './ItemCard.module.css';
import { useCart } from '../../../../contexts';
import { Link } from 'react-router-dom';
import {
  ItemImage,
  AddToCartMessage,
  SizeContainer,
} from '../../../../common/components';
import { useSize } from '../../../../hooks';

const ItemCard = ({ item }: { item: InventoryItemModel }) => {
  const { addToCart, isItemInCart } = useCart();
  const itemInCart = isItemInCart(item.id);
  const { selectedSize, setSelectedSize } = useSize(
    itemInCart ? itemInCart.size : null
  );

  const handleAddToCart = (item: InventoryItemModel) => {
    selectedSize
      ? addToCart(item, selectedSize)
      : alert('Please select a size');
  };

  return (
    <div className={styles.item}>
      <ItemImage item={item} />
      <div className={styles.sizes}>
        <SizeContainer
          item={item}
          setSelectedSize={setSelectedSize}
          selectedSize={selectedSize}
        />
      </div>
      <button
        className={styles.itemOverlay}
        onClick={() => handleAddToCart(item)}
      >
        <AddToCartMessage itemInCart={itemInCart} />
      </button>
      <Link to={`/detail/${item.id}`}>
        <div className={styles.itemTitle}>
          <h3>{item.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
