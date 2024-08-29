import { useInventory } from '../../../contexts';
import { InventoryItemModel } from '../../../models';
import { ItemCard, Error } from '../../../screens/home/components';
import './ShopGrid.css';

const ShopGrid = () => {
  const { items, error } = useInventory();

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <div className="shop">
          {items.map((item: InventoryItemModel) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default ShopGrid;
