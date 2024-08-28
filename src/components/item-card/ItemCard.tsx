import { InventoryItem } from './ItemCardModel';
import './ItemCard.css';
import { useCart } from '../../contexts';

const ItemCard = ({ item }: { item: InventoryItem }) => {
  const { setCartItems } = useCart();

  const addToCart = (item: InventoryItem) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      return updatedItems;
    });
  };

  return (
    <div className="item">
      <div
        className="item-image"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className="item-title">
        <h3>{item.title}</h3>
      </div>
      <div className="item-overlay" onClick={() => addToCart(item)}>
        Add to cart
      </div>
    </div>
  );
};

export default ItemCard;
