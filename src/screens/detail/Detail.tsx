import { useParams } from 'react-router-dom';
import { useCart, useInventory } from '../../contexts';
import {
  AddedToCart,
  Button,
  ItemImage,
  SizeContainer,
} from '../../common/components';
import './Detail.css';
import { useState } from 'react';

const Detail = () => {
  const { items } = useInventory();
  const { cartItems, addToCart } = useCart();
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const item = items.find((i) => i.id === Number(id));
  const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

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
        <SizeContainer
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <Button
          className="btn-primary"
          onClick={
            selectedSize
              ? () => addToCart(item, selectedSize)
              : () => alert('Please select a size')
          }
        >
          {isItemInCart ? <AddedToCart /> : 'Add to cart'}
        </Button>
      </div>
    </div>
  );
};

export default Detail;
