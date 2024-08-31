import { Dispatch, SetStateAction } from 'react';
import { CartItemModel, InventoryItemModel } from '../../../models';

export interface SizeContainerProps {
  item?: InventoryItemModel | CartItemModel;
  selectedSize: string | null;
  setSelectedSize: Dispatch<SetStateAction<string | null>>;
}

export interface SizeCircleProps extends SizeContainerProps {
  size: string;
}
