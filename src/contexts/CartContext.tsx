import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { InventoryItemModel, CartItemModel } from '../models';

interface CartContextValue {
  cartItems: InventoryItemModel[] | CartItemModel[];
  addToCart: (item: InventoryItemModel, size: string | null) => void;
  setCartItems: Dispatch<SetStateAction<InventoryItemModel[]>>;
}

const CartContext = createContext<CartContextValue>();
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  // A user can add to cart with or without a size
  const [cartItems, setCartItems] = useState<
    InventoryItemModel[] | CartItemModel[]
  >([]);

  const addToCart = (item: InventoryItemModel, size: string | null) => {
    setCartItems((prevItems) => {
      const itemToAdd = size ? { ...item, size } : item;
      return [...prevItems, itemToAdd];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
