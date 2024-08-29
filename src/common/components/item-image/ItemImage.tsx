import { Link } from 'react-router-dom';
import { InventoryItemModel } from '../../../models';
import './ItemImage.css';

const ItemImage = ({ item }: { item: InventoryItemModel }) => {
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
