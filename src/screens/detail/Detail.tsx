import { useParams } from 'react-router-dom';
import { useCart, useInventory } from '../../contexts';
import {
  AddedToCart,
  Button,
  ItemImage,
  SizeContainer,
} from '../../common/components';
import styles from './Detail.module.css';
import { useSize } from '../../hooks';
import { InventoryItemModel } from '../../models';

const Detail = () => {
  const { items } = useInventory();
  const { addToCart, isItemInCart } = useCart();
  const { id } = useParams();
  const item = items.find((i) => i.id === Number(id));
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
    <div className={styles.detailScreen}>
      <div className={styles.imageWrapper}>
        <ItemImage item={item} />
      </div>
      <div className={styles.details}>
        <div>
          <h1>{item.title}</h1>
        </div>
        <p>{item.description}</p>
        <SizeContainer
          item={item}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <Button variant="primary" onClick={() => handleAddToCart(item)}>
          {itemInCart ? <AddedToCart /> : 'Add to cart'}
        </Button>
      </div>
    </div>
  );
};

export default Detail;
