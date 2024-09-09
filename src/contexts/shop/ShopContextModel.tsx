import { Dispatch, SetStateAction } from 'react';
import { InventoryItemModel } from '../../models';

export interface ShopContextValue {
  items: InventoryItemModel[];
  error: string | null;
  setItems: Dispatch<SetStateAction<InventoryItemModel[]>>;
}

export const defaultShopContextValue: ShopContextValue = {
  items: [],
  error: null,
  setItems: () => {},
};
