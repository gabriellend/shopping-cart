import { InventoryItemModel } from './ItemCardModel';
import './ItemCard.css';
import { useCart } from '../../../../contexts';
import { Link } from 'react-router-dom';
import { ItemImage, AddedToCart } from '../../../../common/components';

const ItemCard = ({ item }: { item: InventoryItemModel }) => {
  const { cartItems, addToCart } = useCart();
  const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  return (
    <div className="item">
      <ItemImage item={item} />
      <div className="item-overlay" onClick={() => addToCart(item, null)}>
        {isItemInCart ? <AddedToCart /> : 'Add to cart'}
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
