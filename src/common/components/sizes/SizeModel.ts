export interface SizeContainerProps {
  selectedSize?: string;
  setSelectedSize?: (size: string) => void;
}

export interface SizeCircleProps {
  size: string;
  selected: boolean;
  setSelectedSize?: (size: string) => void;
}
