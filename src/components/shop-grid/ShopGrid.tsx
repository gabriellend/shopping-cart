import { useInventory } from '../../contexts';
import { InventoryItem } from '../item-card/ItemCardModel';
import { ItemCard } from '../index';
import './ShopGrid.css';

const ShopGrid = () => {
  const { items } = useInventory();
  return (
    <div className="shop">
      {items.map((item: InventoryItem) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ShopGrid;
