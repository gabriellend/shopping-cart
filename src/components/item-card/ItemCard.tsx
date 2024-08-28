import { InventoryItem } from './ItemCardModel';
import './ItemCard.css';
import { useCart } from '../../contexts';
import { Icons } from '../../assets/icons';

const ItemCard = ({ item }: { item: InventoryItem }) => {
  const { cartItems, setCartItems } = useCart();
  const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

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
        {isItemInCart ? (
          <>
            <span>Added to cart</span>
            <img className="check-mark" src={Icons.checkMark} />
          </>
        ) : (
          'Add to cart'
        )}
      </div>
    </div>
  );
};

export default ItemCard;
