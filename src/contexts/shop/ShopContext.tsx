import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { InventoryItemModel } from '../../models';
import { fetchInventory } from '../../api/inventory';
import { ShopContextValue, defaultShopContextValue } from './ShopContextModel';

export const ShopContext = createContext<ShopContextValue>(
  defaultShopContextValue
);
const useInventory = () => useContext(ShopContext);

const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<InventoryItemModel[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadInventory = async () => {
      try {
        const data = await fetchInventory();
        setItems(data);
        setError(null);
      } catch (error) {
        console.error('Error loading inventory:', error);
        setError('Failed to load inventory');
      }
    };

    loadInventory();
  }, []);

  return (
    <ShopContext.Provider value={{ items, error, setItems }}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopProvider, useInventory };
