import { InventoryItem } from './ItemCardModel';
import './ItemCard.css';

const ItemCard = ({ item }: { item: InventoryItem }) => {
  return (
    <div key={item.id} className="item">
      <div
        className="item-image"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className="item-title">
        <h3>{item.title}</h3>
      </div>
      <div className="item-overlay">Add to cart</div>
    </div>
  );
};

export default ItemCard;
