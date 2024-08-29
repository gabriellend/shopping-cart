import { useParams } from 'react-router-dom';
import { useCart, useInventory } from '../../contexts';
import { AddedToCart, ItemImage } from '../../common/components';
import SizeCircle from './components/size-circle/SizeCircle';
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
              key={size}
              size={size}
              setSelectedSize={setSelectedSize}
              selected={selectedSize === size}
            />
          ))}
        </div>
        <button
          className="add-to-cart-button"
          onClick={
            selectedSize
              ? () => addToCart(item, selectedSize)
              : () => alert('Please select a size')
          }
        >
          {isItemInCart ? <AddedToCart /> : 'Add to cart'}
        </button>
      </div>
    </div>
  );
};

export default Detail;
