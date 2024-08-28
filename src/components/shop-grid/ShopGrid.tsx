import { useInventory } from '../../contexts';
import { InventoryItem } from '../item-card/ItemCardModel';
import { FaExclamationTriangle } from 'react-icons/fa';
import { ItemCard } from '../index';
import './ShopGrid.css';

const ShopGrid = () => {
  const { items, error } = useInventory();

  return (
    <>
      {error ? (
        <div className="error-message">
          <h1>Oops! Something Went Wrong</h1>
          <div className="divider"></div> {/* Red accent line */}
          <p>We were unable to load the inventory. Please try again.</p>
          <button
            className="btn-retry"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      ) : (
        <div className="shop">
          {items.map((item: InventoryItem) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default ShopGrid;
