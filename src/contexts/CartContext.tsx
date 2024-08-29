import { createContext, useContext, useState } from 'react';
import { InventoryItem } from '../components/item-card/ItemCardModel';

interface CartContextValue {
  cartItems: InventoryItem[];
  addToCart: (item: InventoryItem, size: string) => void;
}

const CartContext = createContext<CartContextValue>();
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item: InventoryItem, size: string) => {
    if (!size) {
      return;
    }

    setCartItems((prevItems) => {
      const updatedItem = { ...item, size };
      const updatedItems = [...prevItems, updatedItem];
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
