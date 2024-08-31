import { useState } from 'react';
import { UseSizeReturn } from './useSizeModel';

export const useSize = (size: string | null): UseSizeReturn => {
  const [selectedSize, setSelectedSize] = useState<string | null>(size);

  return {
    selectedSize,
    setSelectedSize,
  };
};
