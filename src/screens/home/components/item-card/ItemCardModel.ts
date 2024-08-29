export interface InventoryItemModel {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string; // url
  rating: {
    rate: number;
    count: number;
  };
}
