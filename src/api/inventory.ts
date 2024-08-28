import { ENDPOINTS } from '../config/api';
import { InventoryItem } from '../components/item-card/ItemCardModel';

export const fetchInventory = async (): Promise<InventoryItem[]> => {
  try {
    const response = await fetch(ENDPOINTS.WOMENS_CLOTHING);
    if (!response.ok) {
      throw new Error('Failed to fetch inventory');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
