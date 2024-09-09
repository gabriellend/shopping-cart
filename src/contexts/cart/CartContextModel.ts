import { Dispatch, SetStateAction } from 'react';
import { CartItemModel, InventoryItemModel } from '../../models';

export interface CartContextValue {
  cartItems: CartItemModel[];
  addToCart: (item: InventoryItemModel, size: string) => void;
  removeFromCart: (id: number) => void;
  setCartItems: Dispatch<SetStateAction<CartItemModel[]>>;
  updateItemSize: (id: number, size: string) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  isItemInCart: (id: number) => CartItemModel | undefined;
}

export const defaultCartContextValue: CartContextValue = {
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  setCartItems: () => {},
  updateItemSize: () => {},
  updateItemQuantity: () => {},
  isItemInCart: () => undefined,
};
