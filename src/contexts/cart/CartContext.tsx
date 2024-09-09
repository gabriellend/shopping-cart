import { createContext, ReactNode, useContext, useState } from 'react';
import { InventoryItemModel, CartItemModel } from '../../models';
import { CartContextValue, defaultCartContextValue } from './CartContextModel';

const CartContext = createContext<CartContextValue>(defaultCartContextValue);
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }: { children: ReactNode }) => {
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

  const isItemInCart = (id: number | undefined) =>
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
