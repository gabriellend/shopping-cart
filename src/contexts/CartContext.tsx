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
  updateItemQuantity: (id: number, quantity: number) => void;
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
      const itemToAdd = size
        ? { ...item, size, quantity: 1 }
        : { ...item, quantity: 1 };
      return [...prevItems, itemToAdd];
    });
  };

  const updateItemQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, setCartItems, updateItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
