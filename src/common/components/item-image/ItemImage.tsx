import { Link } from 'react-router-dom';
import { InventoryItemModel } from '../../../models';
import styles from './ItemImage.module.css';

const ItemImage = ({ item }: { item: InventoryItemModel }) => {
  return (
    <Link to={`/detail/${item.id}`}>
      <div
        className={styles.itemImage}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
    </Link>
  );
};

export default ItemImage;
