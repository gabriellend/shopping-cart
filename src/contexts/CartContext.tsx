import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { InventoryItemModel, CartItemModel } from '../models';

interface CartContextValue {
  cartItems: CartItemModel[];
  addToCart: (item: InventoryItemModel, size: string) => void;
  removeFromCart: (id: number) => void;
  setCartItems: Dispatch<SetStateAction<InventoryItemModel[]>>;
  updateItemSize: (id: number, size: string) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  isItemInCart: (id: number) => CartItemModel;
}

const CartContext = createContext<CartContextValue>();
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItemModel[]>([]);

  const addToCart = (item: InventoryItemModel, size: string) => {
    const itemInCart = isItemInCart(item.id);
    if (itemInCart?.size === size) {
      return;
    }
    setCartItems((prevItems) => [...prevItems, { ...item, size, quantity: 1 }]);
  };

  const removeFromCart = (id: number) =>
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));

  const updateItemQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const updateItemSize = (id: number, size: string) => {
    if (isItemInCart(id)) {
      return setCartItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? { ...item, size } : item))
      );
    }
  };

  const isItemInCart = (id: number) =>
    cartItems.find((cartItem) => cartItem.id === id);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        updateItemQuantity,
        updateItemSize,
        isItemInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
