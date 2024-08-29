import { useParams } from 'react-router-dom';
import { useCart, useInventory } from '../../contexts';
import { AddedToCart, ItemImage, SizeCircle } from '../../components';
import './Detail.css';
import { useState } from 'react';

const Detail = () => {
  const { items } = useInventory();
  const { cartItems, addToCart } = useCart();
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const item = items.find((i) => i.id === Number(id));
  const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
  const sizes = ['xs', 's', 'm', 'l', 'xl'];

  return (
    <div className="detail-screen">
      <div className="image-wrapper">
        <ItemImage item={item} />
      </div>
      <div className="details">
        <div>
          <h1>{item.title}</h1>
        </div>
        <p>{item.description}</p>
        <div className="sizes">
          {sizes.map((size) => (
            <SizeCircle
              size={size}
              setSelectedSize={setSelectedSize}
              selected={selectedSize === size}
            />
          ))}
        </div>
        <button
          className="add-to-cart-button"
          onClick={() => addToCart(item, selectedSize)}
        >
          {isItemInCart ? <AddedToCart /> : 'Add to cart'}
        </button>
      </div>
    </div>
  );
};

export default Detail;
