import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { InventoryItem } from '../components/item-card/ItemCardModel';

interface CartContextValue {
  cartItems: InventoryItem[];
  setCartItems: Dispatch<SetStateAction<InventoryItem[]>>;
}

const CartContext = createContext<CartContextValue>();
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
