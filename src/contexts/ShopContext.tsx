import {
  createContext,
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { InventoryItemModel } from '../models';
import { fetchInventory } from '../api/inventory';

interface ShopContextValue {
  items: InventoryItemModel[];
  error: string | null;
  setItems: Dispatch<SetStateAction<InventoryItemModel[]>>;
}

export const ShopContext = createContext<ShopContextValue>();
const useInventory = () => useContext(ShopContext);

const ShopProvider = ({ children }) => {
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
