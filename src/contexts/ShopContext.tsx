import { createContext, useState, useEffect, useContext } from 'react';
import { ENDPOINTS } from '../config/api';
import { InventoryItem } from '../components/item-card/ItemCardModel';

interface ShopContextValue {
  items: InventoryItem[];
}

export const ShopContext = createContext<ShopContextValue>();
const useInventory = () => useContext(ShopContext);

const ShopProvider = ({ children }) => {
  const [items, setItems] = useState<InventoryItem[]>([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch(ENDPOINTS.WOMENS_CLOTHING);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchInventory();
  }, []);

  return (
    <ShopContext.Provider value={{ items }}>{children}</ShopContext.Provider>
  );
};

export { ShopProvider, useInventory };
