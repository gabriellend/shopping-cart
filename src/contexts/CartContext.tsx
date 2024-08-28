import { createContext, useContext, useState } from 'react';
import { InventoryItem } from '../components/item-card/ItemCardModel';

interface CartContextValue {
  cartItems: InventoryItem[];
  addToCart: (item: InventoryItem) => void;
}

const CartContext = createContext<CartContextValue>();
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item: InventoryItem) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, item];
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
