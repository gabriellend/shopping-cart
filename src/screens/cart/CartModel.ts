import { InventoryItemModel } from '../../models';

export interface CartItemModel extends InventoryItemModel {
  size: string;
  quantity: number;
}
