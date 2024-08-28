import { useParams } from 'react-router-dom';
import { useCart, useInventory } from '../../contexts';
import { ItemCard } from '../../components';

const Detail = () => {
  const { items } = useInventory();
  const { addToCart } = useCart();
  const { id } = useParams();
  const item = items.find((i) => i.id === Number(id));

  return (
    <div className="detail-screen">
      <ItemCard item={item!} />
      <div className="details">
        <div>
          <h1>{item!.title}</h1>
          <button onClick={() => addToCart(item!)}></button>
        </div>
        <p>{item!.description}</p>
        <div className="sizes">
          <div>xs</div>
          <div>s</div>
          <div>m</div>
          <div>l</div>
          <div>xl</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
