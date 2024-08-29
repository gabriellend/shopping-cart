import styles from './SizeContainer.module.css';
import SizeCircle from '../size-circle/SizeCircle';
import { sizes } from '../../../constants/Constants';
import { SizeContainerProps } from '../SizeModel';

const SizeContainer = ({
  selectedSize,
  setSelectedSize,
}: SizeContainerProps) => {
  return (
    <div className={styles.sizes}>
      {sizes.map((size) => (
        <SizeCircle
          key={size}
          size={size}
          setSelectedSize={setSelectedSize}
          selected={selectedSize === size}
        />
      ))}
    </div>
  );
};

export default SizeContainer;
