import './SizeCircle.css';
import { SizeCircleProps } from './SizeCircleMode';

const SizeCircle = ({ size, setSelectedSize, selected }: SizeCircleProps) => {
  const className = selected ? 'size selected' : 'size';
  return (
    <div onClick={() => setSelectedSize(size)} className={className}>
      {size}
    </div>
  );
};

export default SizeCircle;
