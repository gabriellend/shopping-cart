import { useState } from 'react';

export const useSize = (size: string | null) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(size);

  return {
    selectedSize,
    setSelectedSize,
  };
};
