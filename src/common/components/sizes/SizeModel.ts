import { Dispatch, SetStateAction } from 'react';
import { CartItemModel, InventoryItemModel } from '../../../models';

export interface SizeContainerProps {
  item?: InventoryItemModel | CartItemModel;
  selectedSize: string;
  setSelectedSize: Dispatch<SetStateAction<string>>;
}

export interface SizeCircleProps extends SizeContainerProps {
  size: string;
}
