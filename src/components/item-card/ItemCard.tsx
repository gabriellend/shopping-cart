import { InventoryItem } from './ItemCardModel';
import './ItemCard.css';
import { useCart } from '../../contexts';
import { Icons } from '../../assets/icons';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }: { item: InventoryItem }) => {
  const { cartItems, addToCart } = useCart();
  const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  return (
    <div className="item">
      <Link to={`/detail/${item.id}`}>
        <div
          className="item-image"
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      </Link>
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
      <Link to={`/detail/${item.id}`}>
        <div className="item-title">
          <h3>{item.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
