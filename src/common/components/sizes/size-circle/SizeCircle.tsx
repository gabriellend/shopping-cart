import './SizeCircle.css';
import { SizeCircleProps } from '../SizeModel';
import { useCart } from '../../../../contexts';

const SizeCircle = ({
  item,
  size,
  selectedSize,
  setSelectedSize,
}: SizeCircleProps) => {
  const { updateItemSize } = useCart();
  const selected = item?.size ? item.size === size : selectedSize === size;
  const className = selected ? 'size selected' : 'size';

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
    updateItemSize(item?.id, size);
  };

  return (
    <div onClick={() => handleSizeSelection(size)} className={className}>
      {size}
    </div>
  );
};

export default SizeCircle;
