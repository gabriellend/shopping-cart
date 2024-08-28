import { Link } from 'react-router-dom';
import { InventoryItem } from '../item-card/ItemCardModel';
import './ItemImage.css';

const ItemImage = ({ item }: { item: InventoryItem }) => {
  return (
    <Link to={`/detail/${item.id}`}>
      <div
        className="item-image"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
    </Link>
  );
};

export default ItemImage;
