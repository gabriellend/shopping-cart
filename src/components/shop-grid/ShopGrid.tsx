import { ShopContext } from '../../contexts';
import { useContext } from 'react';
import { InventoryItem } from '../item-card/ItemCardModel';
import { ItemCard } from '../index';
import './ShopGrid.css';

const ShopGrid = () => {
  const { items } = useContext(ShopContext);
  return (
    <div className="shop">
      {items.map((item: InventoryItem) => (
        <ItemCard item={item} />
      ))}
    </div>
  );
};

export default ShopGrid;
