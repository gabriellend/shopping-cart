import { Dispatch, SetStateAction } from 'react';

export interface UseSizeReturn {
  selectedSize: string | null;
  setSelectedSize: Dispatch<SetStateAction<string | null>>;
}
